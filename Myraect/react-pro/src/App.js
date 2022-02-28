import React, { useState, useEffect } from 'react'
import CCLifecycle from './components/CCLifecycle'

function App() {
  const [alive, setAlive] = useState(true)

  return (
    <>
      {alive && <CCLifecycle />}
      <button
        onClick={() => {
          setAlive(!alive)
        }}
      >
        {alive ? '再見' : '出現'}
      </button>
    </>
  )
}

export default App
