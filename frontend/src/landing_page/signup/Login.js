import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", data.token); // optional
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL;// If dashboard runs on different port
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="container border-bottom  mb-5">
        <div className="text-center mt-5 p-3">
          <h1>Open a free demat and trading account online</h1>

          <br />
          <h3 className="text-muted mt-3 fs-4 mb-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h3>
        </div>
      </div>

      <div className="row p-3 ">
        <div className="col-6 p-3 text-center">
          <img src="media/images/dnld/account_open.svg" />
        </div>

        <div className="col-6 p-3 text-center">
          <div className="form_container">
            <h1 className="text-muted mb-5">Login Account</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-center">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                  style={{ width: "500px", padding: "10px", margin: "0 auto" }}
                />
              </div>
              <div className="mb-3 text-center">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  className="form-control"
                  required
                  style={{ width: "500px", padding: "10px", margin: "0 auto" }}
                />
              </div>
              <div className="d-grid justify-content-center mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "180px", padding: "10px" }}
                >
                  Submit
                </button>
              </div>
              <br />
              {/* <div className="text-center">
                Already have an account? <Link to={"/login"}>Login</Link>
              </div> */}
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
