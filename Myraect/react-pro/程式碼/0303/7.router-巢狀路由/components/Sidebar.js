import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'

function Sidebar(props) {
  const { matchStepsTable } = props
  
  return (
    <div class="sidenav">
      {matchStepsTable.map((v, i) => {
        return (
          <Link key={i} to={'/admin/' + v}>
            {v}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
