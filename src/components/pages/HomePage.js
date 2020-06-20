import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:7777/posts").then((response) => {
      setPosts(response.data.reverse());
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Link className="button" to="posts/new">
        Создать пост
      </Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="posts_list">
          {posts !== [] ? (
            posts.map((item) => (
              <div className="post" key={item.id}>
                <Link key={item.id} to={`/posts/${item.id}`}>
                  <time className="post_date">
                    {moment(item.created).format("DD.MM.YYYY - HH:mm")}
                  </time>
                  <p className="post_text">{item.content}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No posts...</p>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
