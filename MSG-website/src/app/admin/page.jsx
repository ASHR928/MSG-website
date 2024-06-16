"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigate = useRouter();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://msg-website-2.onrender.com/:5000/api/v1/user/login",
        { email, password },
        config
      );

      if (data.success) {
        navigate.push("/admin/Dashboard");
        if (isClient) {
          localStorage.setItem("userToken", data.token);
        }
      } else {
        alert("Login unsuccessful! Please try again");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex overflow-hidden items-center justify-center h-screen py-10 bg-gray-100">
      <div className="w-11/12 max-w-[500px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 text-black">
        <h1 className="text-5xl font-semibold text-black">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome Megha! Please enter your details.
        </p>
        <div className="mt-8">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={handleLogin}
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
