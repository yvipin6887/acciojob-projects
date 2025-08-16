import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Quiz from './components/Quiz'

function App() {
  const [start, setStart] = useState(0)
  const [timer, setTimer] = useState(true);

  return (
    <>
     <div className='appContainer'>
        <Header setTimer={setTimer} />
        {start == 0 ? (
          <div className="start">
            <button onClick={() => setStart(1)}>Start Quiz</button>
          </div>
        ) : (
          <Quiz timer={timer} setTimer={setTimer} />
        )}
      </div>
    </>
  )
}

export default App
