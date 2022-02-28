import { useState, useEffect } from 'react'
//import userRawData from '../data/users.json'

function UserList(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const [searchWord, setSearchWord] = useState('')

  // 從伺服器載入資料
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  const fetchFilterUser = async (keyword) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?name_like=' + keyword
    )
    const data = await response.json()
    setUsers(data)
  }

  // x秒後，自動關閉載入資料指示 auto close spinner
  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1500)
    }
  }, [loading])

  // didMount
  useEffect(() => {
    // 開啟載入資料指示
    setLoading(true)

    // 載入資料(ajax/fetch...)
    fetchUser()
  }, [])

  const spinner = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  const display = (
    <>
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <button
        onClick={() => {
          // 開啟載入資料指示
          setLoading(true)
          // 載入資料(ajax/fetch...)
          fetchFilterUser(searchWord)
        }}
      >
        Search
      </button>
      <table>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )

  return <>{loading ? spinner : display}</>
}

export default UserList
