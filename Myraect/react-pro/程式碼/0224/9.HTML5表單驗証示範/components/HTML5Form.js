import React, { useState } from 'react'

function HTML5Form(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 作驗証

    // 驗証成功，用fetch或ajax送到伺服器
  }

  return (
    <>
      <h1>HTML5 表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="6"
        />
        <input id="date" type="date" />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default HTML5Form
