(this.webpackJsonpRA_router_crud=this.webpackJsonpRA_router_crud||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},35:function(e,t,a){},36:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(27),s=a.n(o),l=(a(35),a(36),a(7)),r=a(1),m=function(){return c.a.createElement("div",{className:"err_page"},c.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),c.a.createElement(l.b,{title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"))},i=a(8),u=a(9),p=a.n(u),h=a(13),d=a.n(h),f=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),m=r[0],u=r[1];return Object(n.useEffect)((function(){o(!0),p.a.get("http://localhost:7777/posts").then((function(e){u(e.data.reverse()),o(!1)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.b,{className:"button",to:"posts/new"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"),a?c.a.createElement("p",null,"Loading..."):c.a.createElement("div",{className:"posts_list"},m!==[]?m.map((function(e){return c.a.createElement("div",{className:"post",key:e.id},c.a.createElement(l.b,{key:e.id,to:"/posts/".concat(e.id)},c.a.createElement("time",{className:"post_date"},d()(e.created).format("DD.MM.YYYY - HH:mm")),c.a.createElement("p",{className:"post_text"},e.content)))})):c.a.createElement("p",null,"No posts...")))},E=a(29),b=a.n(E),v=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(r.f)();Object(n.useEffect)((function(){if("/posts/edit"===e.location.pathname){var t=e.location.state.id;p.a.get("http://localhost:7777/posts/".concat(t)).then((function(e){s(e.data.content)}))}}),[]);var m=function(){l.push("/")};return c.a.createElement("form",{onSubmit:function(t){""!==o&&("/posts/new"===e.match.path?function(){var e=JSON.stringify({id:0,setId:b.a.generate(),content:o});fetch("http://localhost:7777/posts",{method:"POST",body:e}).then((function(){s(""),m()}))}():"/posts/edit"===e.match.path&&function(){var t=JSON.stringify({id:e.location.state.id,content:o});fetch("http://localhost:7777/posts",{method:"POST",body:t}).then((function(){s(""),m()}))}()),t.preventDefault()},className:"new_post"},c.a.createElement("textarea",{value:o,onChange:function(e){s(e.target.value)},className:"textarea"}),c.a.createElement("div",{className:"newpost_actions"},c.a.createElement("button",{className:"button save_button"},"Save"),c.a.createElement("button",{className:"button close_button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:m},"X")))},g=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],h=m[1],f=Object(r.f)();Object(n.useEffect)((function(){s(!0),p.a.get("http://localhost:7777/posts/"+e.match.params.id).then((function(e){h(e.data),s(!1)}))}),[]);return c.a.createElement(c.a.Fragment,null,o?c.a.createElement("p",null," Loading... "):c.a.createElement("div",{className:"post_page"},c.a.createElement("div",{className:"posts"},c.a.createElement("time",{className:"post_date"},d()(u.created).format("DD.MM.YYYY - HH.mm")),c.a.createElement("p",{className:"post_text"}," ",u.content," ")),c.a.createElement("div",{className:"post_actions"},c.a.createElement("button",{onClick:function(){f.push({pathname:"/posts/edit",state:{id:e.match.params.id}})},className:"button change_button"},"Change"),c.a.createElement("button",{onClick:function(){s(!0),p.a.delete("http://localhost:7777/posts/"+e.match.params.id).then((function(){s(!1),f.push("/")}))},className:"button delete_button"},"Delete"))))};var N=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"background-element"}," ")," ",c.a.createElement("div",{className:"highlight-window"},c.a.createElement("div",{className:"highlight-overlay"}," ")," ")," ",c.a.createElement("div",{className:"window"},c.a.createElement(l.a,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{component:v,exact:!0,path:"/posts/new"}),c.a.createElement(r.a,{component:v,exact:!0,path:"/posts/edit"}),c.a.createElement(r.a,{component:g,exact:!0,path:"/posts/:id"}),c.a.createElement(r.a,{component:f,exact:!0,path:"/"}),c.a.createElement(r.a,{component:m,path:"*"}))))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.5ab68a51.chunk.js.map