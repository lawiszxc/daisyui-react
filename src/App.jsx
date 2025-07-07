import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsOpen(true); // show sidebar if screen is sm and above
    } else {
      setIsOpen(false); // hide sidebar if smaller than sm
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {isOpen && <Sidebar isOpen={isOpen} />}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
          <div className="bg-gray-900 p-4 text-white">Item 8</div>
          <div className="bg-gray-900 p-4 text-white">Item 1</div>
          <div className="bg-gray-900 p-4 text-white">Item 2</div>
          <div className="bg-gray-900 p-4 text-white">Item 3</div>
          <div className="bg-gray-900 p-4 text-white">Item 4</div>
          <div className="bg-gray-900 p-4 text-white">Item 5</div>
          <div className="bg-gray-900 p-4 text-white">Item 6</div>
          <div className="bg-gray-900 p-4 text-white">Item 7</div>
        </main>
      </div>
    </div>
  );
};

export default App;
