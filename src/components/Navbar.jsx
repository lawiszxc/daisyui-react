import Cookies from "js-cookie";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen, user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        console.log("No token found.");
        return;
      }

      await axios.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Cookies.remove("token");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between min-h-19 bg-gray-900 border-b border-gray-200">
      <div className="flex items-center px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none focus:text-gray-700 cursor-pointer"
        >
          {/* <button
            onClick={() => setIsOpen(isOpen)}
            className="text-gray-500 focus:outline-none focus:text-gray-700 cursor-pointer"
          ></button> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center pr-4">
        <div className="dropdown dropdown-end">
          <div className="flex justify-between gap-2 items-center ">
            {user && (
              <div className="text-white text-xs">
                <p>{user.email}</p>
              </div>
            )}

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar justify-between"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
