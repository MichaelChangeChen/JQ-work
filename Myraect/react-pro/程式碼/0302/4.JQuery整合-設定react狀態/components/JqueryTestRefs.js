import { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function JQueryTestRefs(props) {
  const [total, setTotal] = useState(9)

  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const inputRef = useRef(null)

  // didMount
  useEffect(() => {
    // jquery code
    // 加入新事件
    $(buttonRef.current).on('click', () => {
      alert('目前輸入值' + $(inputRef.current).val())
      setTotal(Number($(inputRef.current).val()))
    })
  }, [])

  return (
    <>
      <h1 ref={titleRef}>React</h1>
      {/* 不可控 */}
      <input type="text" ref={inputRef} defaultValue={total} />
      <button ref={buttonRef}>設定狀態</button>

      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
    </>
  )
}

export default JQueryTestRefs
