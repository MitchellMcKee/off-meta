import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // refer to https://scryfall.com/docs/api 

  return (
    <>
      <h1>off meta</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          hype count is at {count}
        </button>
        <p>
          The goal of this project is to provide an easy way to 
          find the least commonly used cards in tournament decks
        </p>
      </div>
      <p className="read-the-docs">
        Placeholder Front-end for React Site that will be hosted on S3
      </p>
    </>
  )
}

export default App
