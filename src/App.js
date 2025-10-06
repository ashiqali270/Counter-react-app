import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment= () =>setCount(count + 1);
  const decrement =() =>setCount(count - 1);
  const reset= () => setCount(0);

return (
  <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-6"> Counter App</h1>

 <div className="text-6xl font-extrabold mb-6">{count}</div>

    <div className="space-x-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-lg shadow-lg"
        >
          Increment
        </button>

    <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-lg shadow-lg"
        >
          Decrement
        </button>

      <button
          onClick={reset}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg shadow-lg"
        >
          Reset
      </button>
      </div>
     </div>
  );}

export default App;
