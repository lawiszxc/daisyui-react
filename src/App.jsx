import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {!isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
