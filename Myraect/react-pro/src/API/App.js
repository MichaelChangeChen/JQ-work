import React, { useEffect, useState } from 'react'
import config from './Config'
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://motoretag.taichung.gov.tw/DataAPI/api/AirPortFlyAPI/D/TPE')
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        setData(obj)
      })
  }, [])
  console.log(data)

  const renderMe = (data) => {
    return data.map((el,i) => (
      <tr key={i}>
        <td>{el.AirlineID}</td>
        <td>{el.Airline}</td>
        <td>{el.ArrivalAirport}</td>
        <td>{el.ArrivalAirportID}</td>
        <td>{el.DepartureAirport}</td>
        <td>{el.DepartureAirportID}</td>
        <td>{el.EstimatedTime}</td>
        <td>{el.FlightNumber}</td>
        <td>{el.ScheduleTime}</td>
      </tr>
    ))
  }

  return (
    <>
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>{renderMe(data)}</tbody>
        </table>
      </div>
    </>
  )
}

export default App
