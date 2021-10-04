import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";

const LoginPage = () => {
  let history = useHistory();
  useEffect(() => {
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      // Add the API key copied from 5th step
      apiKey: process.env.REACT_APP_SAWO_KEY,
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload) => {
        console.log(payload);
        localStorage.setItem("data", JSON.stringify(payload));
        history.push("/dashboard");
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, [history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        id="sawo-container"
        style={{ height: "400px", width: "300px" }}
      ></div>
    </div>
  );
};

export default LoginPage;
