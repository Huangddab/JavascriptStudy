import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./01-base/01-class";
// import App from "./01-base/02-functional";
// import App from "./01-base/03-事件处理";
// import App from "./01-base/04-ref";
// import App from "./01-base/05-状态";
// import App from "./01-base/07-todoList";
import App from "./01-base/08-movie";
import "./index.css"; // 确保引入了 index.css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name="react" />);
