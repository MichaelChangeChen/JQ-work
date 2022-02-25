import React, { useState } from 'react'

function FCForm() {
  const [data, setData] = useState({ fullname: '', phone: '', fav: '' })

  // radio
  //const [radioValue, setRadioValue] = useState('')
  const favOptions = ['HTML', 'CSS', 'JavaScript', 'Java']

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
      <p>請選擇你最喜愛的網站語言:</p>
      {favOptions.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              type="radio"
              value={v}
              name="fav"
              checked={v === data.fav}
              onChange={handleChange}
            />
            <label htmlFor={v}>{v}</label>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default FCForm
