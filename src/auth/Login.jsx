import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import Cookies from "js-cookie";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/login", form);

      console.log("Login success:", response.data);

      if (response.data.status === "success") {
        Cookies.set("token", response.data.token, { expires: 1 });

        navigate("/dashboard");
      } else {
        alert("Login failed: Invalid response");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(
        "Login failed: " +
          (error.response?.data?.error || "Something went wrong")
      );
    }
  };

  return (
    <div className="flex  items-center justify-center h-screen rounded-9xl">
      <div className="flex w-full h-full bg-gray-800 md:w-1/2 md:h-120 rounded-4xl p-1 divide-none divide-x-2">
        <div className="flex-1 hidden lg:flex bg-white items-center justify-center text-white m-1 rounded-4xl rounded-r-none">
          <div className="w-full flex justify-center">
            <img
              src="/occLogo.png"
              alt="occLogo"
              className="w-[400px] h-auto"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col text-white justify-center">
          <div className="flex justify-center">
            <h1>Welcome to Login Page</h1>
          </div>

          <form action="">
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
                />
              </div>
              <div className="m-3">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-success w-full hover:bg-green-600"
                >
                  Login
                </button>
                <p className="justify-center flex mt-2">
                  or &nbsp;
                  <Link
                    to={"/register"}
                    className="text-gray-400 cursor-pointer"
                  >
                    create a new account!
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
