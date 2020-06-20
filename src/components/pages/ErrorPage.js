import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="err_page">
      <h1>Страница не найдена</h1>
      <Link title="На главную" to="/">
        На главную
      </Link>
    </div>
  );
};

export default ErrorPage;
