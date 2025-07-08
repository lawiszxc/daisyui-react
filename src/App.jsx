import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-300">
      {!isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="m-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
