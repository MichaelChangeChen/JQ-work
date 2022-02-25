import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({ fullname: '', phone: '' })

  const handleChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    // "合併"原有物件值的語法
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newData = { ...data, [e.target.name]: e.target.value }
    // [e.target.name] ---> input 的 name="fullname"

    
    // 3. 設定回狀態
    setData(newData)
  }

  return (
    <>
      <h2>文字輸入框</h2>
      <label>姓名</label>
      <input
        type="text"
        value={data.fullname}
        name="fullname"
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        type="text"
        value={data.phone}
        name="phone"
        onChange={handleChange}
      />
    </>
  )
}

export default App
