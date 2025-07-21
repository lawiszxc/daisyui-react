import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen rounded-9xl">
        <div className="flex bg-gray-800 w-1/2 h-120 rounded-4xl p-1 divide-none divide-x-2">
          <div className="flex-1 flex flex-col text-white mt-20">
            <div className="flex justify-center">
              <h1>Welcome to Register Page</h1>
            </div>

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
                />
              </div>
              <div className="m-2">
                <button className="btn btn-success w-full hover:bg-green-600">
                  Register
                </button>
                <p className="justify-center flex mt-2">
                  or &nbsp;
                  <Link to={"/login"} className="text-gray-400 cursor-pointer">
                    already have an account!
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex bg-white items-center justify-center text-white m-1 rounded-4xl rounded-l-none">
            <div className="w-full flex justify-center">
              <img src="/occLogo.png" alt="occLogo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
