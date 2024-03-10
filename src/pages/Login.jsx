import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updateUser } from "../store/slices/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(updateUser({ username, password }));
    navigate("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-9xl italic">MINI STORE</h1>
      <div className="bg-black p-2 flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-white" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
      {/* <NavLink
        to={"/products"}
        className="p-4 text-4xl bg-blue-500 text-white rounded-md"
      >
        GO TO PRODUTS
      </NavLink> */}
    </div>
  );
};

export default Login;
