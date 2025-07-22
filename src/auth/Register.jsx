import axios from "../axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Register the user
      const registerResponse = await axios.post("/register", form, {
        withCredentials: true,
      });

      console.log("Registration successful", registerResponse.data);

      // Optional: immediately login after registration
      const response = await axios.post("/login", {
        email: form.email,
        password: form.password,
      });

      console.log("Login successful", response.data);
      Cookies.set("token", response.data.token, { expires: 1 });

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Registration or login failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen rounded-9xl">
        <div className="flex w-full h-full bg-gray-800 md:w-1/2 md:h-120 lg:rounded-4xl p-1 divide-none divide-x-2">
          <div className="flex flex-1 flex-col text-white justify-center">
            <div className="flex justify-center">
              <h1>Welcome to Register Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div className="m-2">
                  <div className="text-sm ml-1" htmlFor="email">
                    Email
                  </div>
                  <input
                    className="input text-gray-700 w-full"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email or Phone Number"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="m-2">
                  <div className="text-sm ml-1" htmlFor="password">
                    Password
                  </div>
                  <input
                    className="input text-gray-700 w-full"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="m-3">
                  <button
                    onClick={() => handleSubmit()}
                    className="btn btn-success w-full hover:bg-green-600"
                  >
                    Register
                  </button>
                  <p className="justify-center flex mt-2">
                    or &nbsp;
                    <Link
                      to={"/login"}
                      className="text-gray-400 cursor-pointer"
                    >
                      already have an account!
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-1 hidden lg:flex bg-white items-center justify-center text-white m-1 rounded-4xl rounded-l-none">
            <div className="w-full flex justify-center">
              <img
                src="/occLogo.png"
                alt="occLogo"
                className="w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
