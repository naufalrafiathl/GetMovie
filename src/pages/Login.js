import React from "react";
import Form from "../components/Form";

function Login({history}) {
  return (
    <div className="container">
      <Form login history={history}/>
    </div>
  );
}

export default Login;
