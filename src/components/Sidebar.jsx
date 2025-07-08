import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="md:flex lg:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-24 bg-gray-900 p-4">
        <span className="text-white font-bold uppercase flex">
          <img className="h-19" src="/logo.png" alt="OCCLogo" />
          <span className="text-center text-gray-100 content-center">
            OPOL COMMUNITY COLLEGE
          </span>
        </span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex-1 px-2 py-4 bg-gray-800">
          <NavLink
            to="/crud-function"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-700 transition ${
                isActive
                  ? "bg-gray-900 text-white font-semibold"
                  : "text-gray-100"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            CRUD Function
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-700 transition ${
                isActive
                  ? "bg-gray-900 text-white font-semibold"
                  : "text-gray-100"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            Home
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
