import React from 'react'

function Login(props) {
  const { auth, setAuth } = props
  return (
    <>
      <h1>Login</h1>
      {auth ? '已登入' : '未登入'}
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出...' : '登入'}
      </button>
    </>
  )
}

export default Login
