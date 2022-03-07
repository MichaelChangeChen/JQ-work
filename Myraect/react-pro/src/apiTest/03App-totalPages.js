import { useEffect, useState } from 'react'
import config from './Config'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(config.AB_LIST)
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setData(obj)
      })
  }, [])

  console.log(data)

  const renderMe = (data) => {
    if (data.rows && data.rows.length) {
      return data.rows.map((el) => (
        <tr key={'test' + el.sid}>
          <td>{el.sid}</td>
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.mobile}</td>
          <td>{el.birthday}</td>
        </tr>
      ))
    } else {
      return null
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="container">
          {data.rows && data.rows.length ? (
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item ">
                  <a
                    className="page-link"
                    href="#/"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                {/* 要用fill來把陣列填滿 */}
                {Array(data.totalPages)
                  .fill(1)
                  .map((el, i) => (
                    <li className="page-item">
                      <a className="page-link" href="#/">
                        {i + 1}
                      </a>
                    </li>
                  ))}

                <li className="page-item">
                  <a className="page-link" href="#/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            ''
          )}
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">mobile</th>
              <th scope="col">birthday</th>
            </tr>
          </thead>
          <tbody>{renderMe(data)}</tbody>
        </table>
      </div>
    </div>
  )
}

export default App
