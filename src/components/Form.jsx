import React from "react";

function Form() {
  return (
    <div className="white_box">
      <div class="row" id="login_section">
        <div className="icon">
          <img
            src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
            alt="IMG"
          ></img>
        </div>
        <div className="login_form">
          <h1>User Login</h1>

          <input id="ip2" type="email" name="email" placeholder="Email" />
          <br />
          <input
            id="ip2"
            type="Password"
            name="Password"
            placeholder="Password"
          />
          <br />

          <button type="submit">Login</button>

          <p>
            Forgot{" "}
            <a class="txt2" href="#">
              Username / Password?
            </a>
          </p>
          <a class="txt2" href="#">
            Create your Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
