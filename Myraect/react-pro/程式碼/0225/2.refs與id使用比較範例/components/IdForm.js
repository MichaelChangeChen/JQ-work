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
      <button
        onClick={() => {
        console.log(document.getElementById('my-input').value)
        }}
      >
        Click me(getValue)
      </button>
    </>
  )
}

export default IdForm
