import { useEffect } from 'react'
import $ from 'jquery'
function JQueryTest(props) {
  
  //didMount
  useEffect(() => {
    //Jquery Code
    console.log($('#title').text())
    $('#one').on('click',()=>alert('Hello'+ $('#title').text()
    ))
  }, [])
  return (
    <>
      <h1 id="title">React</h1>
      <button id="one">Click me</button>
    </>
  )
}
JQueryTest.prototype = {}
export default JQueryTest
