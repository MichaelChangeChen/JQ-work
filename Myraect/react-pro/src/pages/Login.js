import React from 'react'
import { useHistory } from 'react-router-dom'
function Login(props) {
  const { auth, setAuth } = props
  let history = useHistory()
  return (
    <>
      <h1>登入</h1>
      {auth ? '已登入' : '尚未登入'}
      <button
        onClick={() => {
          setAuth(!auth)
          alert('welcome! go to home page')
          //轉至首頁
          history.push('/')
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
      <br />
      <button
        onClick={() => {
          //轉至上一頁
          history.goBack()
        }}
      >
        上一頁
      </button>
    </>
  )
}

export default Login
