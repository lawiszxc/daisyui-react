import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-300">
      {!isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div className="flex flex-1 flex-col overflow-y-auto">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-auto p-4 bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
