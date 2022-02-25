import React, { useState } from 'react'

function FCFormFieldsMapDemo() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
  })

  const labels = ['姓名', '電話', '電子郵件', '住址']
  const keys = ['fullname', 'phone', 'email', 'address']

  const handleChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    // "合併"原有物件值的語法
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newData = { ...data, [e.target.name]: e.target.value }

    // 3. 設定回狀態
    setData(newData)
  }

  return (
    <>
      <h2>文字輸入框</h2>
      {labels.map((v, i) => {
        return (
          <div key={i}>
            <label>{v}</label>
            <input
              type="text"
              value={data[keys[i]]}
              name={keys[i]}
              onChange={handleChange}
            />
          </div>
        )
      })}
      {/* <label>姓名</label>
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
      /> */}
    </>
  )
}

export default FCFormFieldsMapDemo
