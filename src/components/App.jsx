import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function renderConditionally() {
  if (userIsRegistered === false) {
    return <Form />;
  } else {
    return (
      <>
        <h1>Admin Login</h1>
        {/* <img src="" /> */}
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
