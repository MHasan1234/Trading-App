import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message, token } = data; // assume your backend sends `token`

      if (success) {
        handleSuccess(message);

        // Store token for future authentication
        if (token) {
          localStorage.setItem("token", token);
        }

        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL; // redirect to dashboard
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
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
            <h1 className="text-muted mb-5">Signup Up Now</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-center">
                <label htmlFor="email" className="form-label" >Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  // className="form-control"
                  required
                  className="form-control form_input"
                  
                 
                />
              </div>
              <div className="mb-3 text-center">
                <label htmlFor="email" className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  //  className="form-control"
                  required
                  // style={{ width: "500px", padding: "10px",margin: "0 auto" }}
                  className="form-control form_input"
                />
              </div>
              <div className="mb-3 text-center">
                <label htmlFor="password"  className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  //  className="form-control"
                  required
                  // style={{ width: "500px", padding: "10px",margin: "0 auto" }}
                  className="form-control form_input"
                />
              </div>
               <div className="d-grid justify-content-center mb-3">
              <button type="submit" className="btn btn-primary form_button"  >Submit</button>
              </div>
              <br/>
               <div className="text-center">
                Already have an account? <Link to={"/login"}>Login</Link>
                </div>
              
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
