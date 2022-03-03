import { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
function JQueryTestRefs(props) {
  const [totle, setTotle] = useState(0)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const inputRef = useRef(null)

  //didMount
  useEffect(() => {
    //Jquery Code
    $(buttonRef.current).off('click')
    //加入事件

    $(buttonRef.current).on('click', () => {
      alert('目前輸入直:' + $(inputRef.current).val())
      setTotle(Number($(inputRef.current).val()))
    })
  }, [])
  return (
    <>
      <h1 ref={titleRef}>React</h1>
      {/* 不可控的 */}
      <input type="text" ref={inputRef} defaultValue={totle} />
      <button className='btn btn-primary' ref={buttonRef}>設定狀態</button>
      <h1 onClick={() => setTotle(totle + 1)}>{totle}</h1>
    </>
  )
}

export default JQueryTestRefs
