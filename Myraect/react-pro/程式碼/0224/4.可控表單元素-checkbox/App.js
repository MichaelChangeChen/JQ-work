import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // radio group
  const [radioValue, setRadioValue] = useState('')
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉面']

  // select
  const [selectedValue, setSelectedValue] = useState('')

  // single checkbox - agree
  const [agree, setAgree] = useState(false)

  // checkbox group
  // useState([]) 空陣列
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['西瓜', '芒果', '芭樂']

  return (
    <>
      <h1>可控表單元素</h1>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
      <h2>選項按鈕(群組)</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value)
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        )
      })}
      <h2>下拉清單</h2>
      <label htmlFor="cars">選擇車子:</label>
      <select
        name="cars"
        id="cars"
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
      <h2>核取方塊(單一)</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意會員註冊條款</label>
      <h2>核取方塊(群組)</h2>
      <p>選擇你喜歡的水果</p>
      {fruitOptions.map((v, i) => {
        return (
          <React.Feagment key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={(e) => {
                //先判斷是否有在狀態陣列中
                const inState = likeList.includes(e.target.value)
                //初始的時候 e.target.value 是空的
                if (inState) {
                  //if 在陣列中(還沒自行勾選狀態下) -> 移除

                  // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                  // 2. 在新的變數值(陣列/物件)上作處理
                  const newLikeList = likeList.filter(
                    (v, i) => v !== e.target.value
                    //如果likeList裡面,沒有(不等於)被點選的值的話,被filter挑出來變成一個陣列newLikeList
                  )
                  // 3. 設定回原本的狀態中
                  setLikeList(newLikeList)
                } else {
                  //else  -> 加入陣列
                  const newLikeList = [...likeList, e.target.value]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label>{v}</label>
          </React.Feagment>
        )
      })}
    </>
  )
}

export default App
