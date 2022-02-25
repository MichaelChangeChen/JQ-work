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
    </>
  )
}

export default RefsForm
