import { useState } from 'react'
//useState是一個hook~ (是什麼)
function App() {
  const [total, setTotal] = useState(0)
//total是得到狀態  setTotal是設定狀態
  return <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
}

export default App
