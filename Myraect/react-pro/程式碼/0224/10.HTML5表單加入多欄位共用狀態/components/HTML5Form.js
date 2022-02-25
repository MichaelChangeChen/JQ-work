import React, { useState } from 'react'

function HTML5Form(props) {
  const [data, setData] = useState({ username: '', password: '', email: '' })

  const handleChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    // "合併"原有物件值的語法
    const newData = { ...data, [e.target.name]: e.target.value }

    // 3. 設定回狀態
    setData(newData)
  }

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 作驗証
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    // 獲取同名稱的checkbox
    console.log(formData.getAll('likeList'))

    // 驗証成功，用fetch或ajax送到伺服器
  }

  return (
    <>
      <h1>HTML5 表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          value={data.username}
          name="username"
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          value={data.password}
          name="password"
          onChange={handleChange}
          required
          minLength="6"
        />
        <h3>利用FormData獲取checkbox的值</h3>
        <input type="checkbox" value="西瓜" name="likeList" />
        <label>西瓜</label>
        <input type="checkbox" value="芒果" name="likeList" />
        <label>芒果</label>
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default HTML5Form
