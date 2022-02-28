import React, { useRef } from 'react'

function RefsForm(props) {
  const inputEl = useRef()

  return (
    <>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        Click me(focus)
      </button>

      <button
        onClick={() => {
          inputEl.current.blur()
        }}
      >
        Click me(blur)
      </button>
      
      <button
        onClick={() => {
        console.log(inputEl.current.value)
        }}
      >
        Click me(getValue)
      </button>
    </>
  )
}

export default RefsForm
