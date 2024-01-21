import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("lime");

  return (
    <div
      className="flex justify-center items-center w-full h-screen duration-10000"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex justify-center items-center h-16 bg-green-300 bg-opacity-30 rounded-3xl"
        style={{ border: "2px solid black" }}
      >
        <button onClick={() => setColor("blue")} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md hover:border-4 hover:border-blue-500">
          Button 1
        </button>
        <button onClick={() => setColor("green")} className="px-4 py-2 mx-2 bg-green-500 text-white rounded-md hover:border-4 hover:border-green-500">
          Button 2
        </button>
        <button onClick={() => setColor("yellow")} className="px-4 py-2 mx-2 bg-yellow-500 text-white rounded-md hover:border-4 hover:border-yellow-500">
          Button 3
        </button>
        <button  onClick={() => setColor("red")}  className="px-4 py-2 mx-2 bg-red-500 text-white rounded-md hover:border-4 hover:border-red-500">
          Button 4
        </button>
        <button onClick={() => setColor("purple")}  className="px-4 py-2 mx-2 bg-purple-500 text-white rounded-md hover:border-4 hover:border-purple-500">
          Button 5
        </button>
      </div>

      <footer className="text-center text-cursive text-gray-500 text-sm mt-auto py-4">
        &copy; Devmalya 2023
      </footer>
    
    </div>
  );
}

export default App