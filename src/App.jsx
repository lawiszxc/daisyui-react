import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {!isOpen && <Sidebar isOpen={isOpen} />}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
          <div className="bg-gray-900 p-4 text-white">HILARY GWAPA</div>
        </main>
      </div>
    </div>
  );
};

export default App;
