import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <h2>Number</h2>
      {123}
      {123 + 111}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>String</h2>
      {'abc'}
      {'abc' + 'def'}
      <h2>Null / Undefind</h2>
      {null}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 'abc', true, null, undefined]}
      <h2>Object</h2>
      {/* 在JSX語法理不能渲一般物件,但陣列可以 */}
      {/* {{a:1,b:2}}  */}
      {/* {new Date()} */}
      <h2>Function</h2>
      {() => console.log('Function')}
    </>
  )
}

export default App
