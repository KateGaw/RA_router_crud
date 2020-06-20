import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const PostPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:7777/posts/" + props.match.params.id)
      .then((response) => {
        setPost(response.data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = () => {
    setIsLoading(true);
    axios
      .delete("http://localhost:7777/posts/" + props.match.params.id)
      .then(() => {
        setIsLoading(false);
        history.push("/");
      });
  };

  const handleChange = () => {
    history.push({
      pathname: "/posts/edit",
      state: { id: props.match.params.id },
    });
  };

  return (
    <>
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div className="post_page">
          <div className="posts">
            <time className="post_date">
              {moment(post.created).format("DD.MM.YYYY - HH.mm")}
            </time>
            <p className="post_text"> {post.content} </p>
          </div>
          <div className="post_actions">
            <button onClick={handleChange} className="button change_button">
              Change
            </button>
            <button onClick={handleDelete} className="button delete_button">
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
