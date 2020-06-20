const http = require("http");
const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const koaBody = require("koa-body");

const app = new Koa();

app.use(cors());
app.use(koaBody({ json: true }));

// CORS
app.use(async(ctx, next) => {
    const origin = ctx.request.get("Origin");
    if (!origin) {
        return await next();
    }
    const headers = { "Access-Control-Allow-Origin": "*" };
    if (ctx.request.method !== "OPTIONS") {
        ctx.response.set({...headers });
        try {
            return await next();
        } catch (e) {
            e.headers = {...e.headers, ...headers };
            throw e;
        }
    }
    if (ctx.request.get("Access-Control-Request-Method")) {
        ctx.response.set({
            ...headers,
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
        });
        if (ctx.request.get("Access-Control-Request-Headers")) {
            ctx.response.set(
                "Access-Control-Allow-Headers",
                ctx.request.get("Access-Control-Request-Headers")
            );
        }
        ctx.response.status = 204;
    }
});

let posts = [];
let nextId = 1;

const router = new Router();

router.get("/posts", async(ctx, next) => {
    ctx.response.body = posts;
});

router.post("/posts", async(ctx, next) => {
    const { id, content, setId } = JSON.parse(ctx.request.body);

    if (id !== 0) {
        posts = posts.map(o => o.id !== id ? o : {...o, content: content });
        ctx.response.status = 204;
        return;
    }

    posts.push({ content: content, id: setId, created: new Date() });
    ctx.response.status = 204;
});

router.get("/posts/:id", async(ctx, next) => {
    const postId = ctx.params.id;
    const post = posts.find((item) => item.id === postId);
    ctx.response.body = post;
});

router.delete("/posts/:id", async(ctx, next) => {
    const postId = ctx.params.id;
    const index = posts.findIndex((o) => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log("server started"));