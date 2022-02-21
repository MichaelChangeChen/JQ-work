import './App.css'

function App() {
  return (
    <>
      <h2>Number</h2>
      {123}
      {123 + 1}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>String</h2>
      {'abc'}
      {'abc' + 'de'}
      <h2>null/undefined</h2>
      {null}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 'abc', true, null, undefined]}
      <h2>Object(錯誤)</h2>
      {/* 一般物件不能直接嵌入jsx中，會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      {/* {new Date()} */}
      <h2>Function(警告)</h2>
      {() => console.log(123)}
    </>
  )
}

export default App
