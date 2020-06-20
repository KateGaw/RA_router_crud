import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

const NewPostPage = (props) => {
  const [postContent, setPostContent] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (props.location.pathname === "/posts/edit") {
      const idPath = props.location.state.id;
      axios.get(`http://localhost:7777/posts/${idPath}`).then((response) => {
        setPostContent(response.data.content);
      });
    }
  }, []);

  const handleClose = () => {
    history.push("/");
  };

  const handleChange = (event) => {
    setPostContent(event.target.value);
  };

  const savePost = () => {
    const output = JSON.stringify({
      id: 0,
      setId: shortid.generate(),
      content: postContent,
    });

    fetch("http://localhost:7777/posts", {
      method: "POST",
      body: output,
    }).then(() => {
      setPostContent("");
      handleClose();
    });
  };

  const editPost = () => {
    const output = JSON.stringify({
      id: props.location.state.id,
      content: postContent,
    });

    fetch("http://localhost:7777/posts", {
      method: "POST",
      body: output,
    }).then(() => {
      setPostContent("");
      handleClose();
    });
  };

  const handleSubmit = (event) => {
    if (postContent !== "") {
      if (props.match.path === "/posts/new") {
        savePost();
      } else if (props.match.path === "/posts/edit") {
        editPost();
      }
    }

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="new_post">
      <textarea value={postContent} onChange={handleChange} className='textarea' />
      <div className="newpost_actions">
        <button className="button save_button">Save</button>
        <button
          className="button close_button"
          aria-label="Закрыть"
          onClick={handleClose}
        >
          X
        </button>
      </div>
    </form>
  );
};

export default NewPostPage;
