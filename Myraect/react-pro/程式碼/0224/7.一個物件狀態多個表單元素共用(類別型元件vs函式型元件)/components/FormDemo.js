import React, { useState } from 'react'

function FormDemo() {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  // radio
  const [radioValue, setRadioValue] = useState('')
  const favOptions = ['HTML', 'CSS', 'JavaScript', 'Java']

  // select
  const [selectedValue, setSelectedValue] = useState('')

  // single checkbox
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['西瓜', '芒果', '蘋果']

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value)
        }}
      />
      <h2>選項按鈕</h2>
      <p>請選擇你最喜愛的網站語言:</p>
      {favOptions.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              type="radio"
              value={v}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value)
              }}
            />
            <label htmlFor={v}>{v}</label>
          </React.Fragment>
        )
      })}
      <h2>下拉清單</h2>
      <label for="cars">還擇車種:</label>
      <select
        name="cars"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <h2>單一核取方塊</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意會員註冊條款</label>
      <h2>多個核取方塊</h2>
      <p>請選擇你最喜愛水果:</p>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={(e) => {
                // 先判斷vlaue是否在狀態陣列中
                if (likeList.includes(e.target.value)) {
                  // if 在陣列中->移除
                  const newLikeList = likeList.filter(
                    (v, i) => v !== e.target.value
                  )
                  setLikeList(newLikeList)
                } else {
                  // else 加入到陣列中
                  const newLikeList = [...likeList, e.target.value]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}

export default FormDemo
