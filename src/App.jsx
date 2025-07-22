import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "./axios";
import Cookies from "js-cookie";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = Cookies.get("token");

      const response = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    },
  });

  return (
    <>
      <div className="flex h-screen bg-gray-300">
        {!isOpen && <Sidebar setIsOpen={setIsOpen} />}

        <div className="flex flex-1 flex-col overflow-y-auto">
          <Navbar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />

          <main className="flex-1 overflow-auto p-4 bg-gray-300">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
