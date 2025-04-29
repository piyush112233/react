import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(12)

  return (
    <>
      {/* Fixed screen size to match typical desktop resolution and disable scroll */}
      <div
        className="w-[1920px] h-[1080px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="w-full h-full flex flex-col justify-end items-center space-y-4">
          {/* Buttons section */}
          <div className="text-2xl font-extrabold text-white drop-shadow-lg mb-10 flex flex-wrap justify-center gap-4">
            {/* Button for Blue */}
            <button
              type="button"
              onClick={() => setColor('blue')}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Blue
            </button>
            {/* Button for Gray */}
            <button
              type="button"
              onClick={() => setColor('gray')}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Gray
            </button>
            {/* Button for Dark */}
            <button
              type="button"
              onClick={() => setColor('black')}
              className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Dark
            </button>
            {/* Button for Light */}
            <button
              type="button"
              onClick={() => setColor('white')}
              className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Light
            </button>
            {/* Button for Green */}
            <button
              type="button"
              onClick={() => setColor('green')}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Green
            </button>
            {/* Button for Red */}
            <button
              type="button"
              onClick={() => setColor('red')}
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Red
            </button>
            {/* Button for Yellow */}
            <button
              type="button"
              onClick={() => setColor('yellow')}
              className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Yellow
            </button>
            {/* Button for Purple */}
            <button
              type="button"
              onClick={() => setColor('purple')}
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
