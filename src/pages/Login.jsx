import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-9xl italic">MINI STORE</h1>
      <NavLink
        to={"/products"}
        className="p-4 text-4xl bg-blue-500 text-white rounded-md"
      >
        GO TO PRODUTS
      </NavLink>
    </div>
  );
};

export default Login;
