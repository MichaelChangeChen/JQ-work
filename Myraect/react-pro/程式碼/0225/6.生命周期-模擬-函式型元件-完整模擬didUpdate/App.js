import React, { useState, useEffect } from 'react'
// import CCLifecycle from './components/CCLifecycle'
import FCLifecycle from './components/FCLifecycle'

function App() {
  const [alive, setAlive] = useState(true)

  return (
    <>
      {alive && <FCLifecycle />}
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
