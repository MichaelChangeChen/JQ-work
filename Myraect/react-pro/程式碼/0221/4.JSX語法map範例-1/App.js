// 導入一般的js物件檔
import { data } from './data/student'
// 導入json一樣會自動轉為js 物件
import students from './data/student.json'

function App() {
  console.log(students)
  console.log(data)

  const newData = data.map((v, i) => {
    return <li>{v.name}</li>
  })

  console.log(newData)

  return (
    <>
      <ul>
        {data.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
