import React from "react";

export default function Input(props) {
  return (
    <div className="d-flex flex-column justify-content-center ">
      <form onSubmit={props.submit} className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-baseline">
          <p style={{ color: "white" }}>Email id :</p>
          <input
            placeholder="abc@gmail.com"
            name="email"
            type="text"
            value={props.Emailvalue}
            onChange={props.changed}
            style={{ width: "200px" }}
          />
        </div>
        <br />
        <div className="d-flex justify-content-center align-items-baseline">
          <p style={{ color: "white" }}>Password :</p>
          <input
            value={props.passwordValue}
            placeholder="password"
            type="password"
            name="password"
            onChange={props.changed}
            style={{ width: "200px" }}
          />
        </div>
        <div className="d-inherit mt-4">
          <input
            type="Button"
            value="Register"
            // style={{ marginLeft: "476px", marginTop: "41px" }}
            onClick={props.submit}
          />
          <input
            type="Button"
            value="login"
            // style={{ marginLeft: "500px", marginTop: "41px" }}
            onClick={props.login}
          />
        </div>
      </form>
    </div>
  );
}
