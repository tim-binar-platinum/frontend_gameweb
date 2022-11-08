import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../components/Input";
import art from "../assets/image/landingpage-art.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password: password,
    };
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((st) => {
        console.log(st);
        if (st.msg == "data tidak ada") {
          return alert("pengguna tidak ada");
        }
        if (st.msg == "password salah") {
          return alert("password salah");
        }
        sessionStorage.setItem("accessToken", st.token);
        alert("login sukses");
        console.log("token di session storage", sessionStorage.getItem("accessToken"))
      });
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={art} className="img-fluid" alt="phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <Input
                  type={"text"}
                  title={"username"}
                  id={"email"}
                  set={(e) => setEmail(e.target.value)}
                />
                {/* Password input */}
                <Input
                  type={"password"}
                  title={"password"}
                  id={"password"}
                  set={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5"
                >
                  Sign in
                </button>
                <Link to={"/register"}>
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg btn-block mt-5"
                  >
                    Register
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
