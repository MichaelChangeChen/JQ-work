import React from 'react'

function IdForm(props) {
  return (
    <>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        Click me(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        Click me(blur)
      </button>
    </>
  )
}

export default IdForm
