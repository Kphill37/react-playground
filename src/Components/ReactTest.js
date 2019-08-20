import React from 'react'
import '../ReactTest.css'

function ReactTest() {
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        <li>
          Study React <input type="checkbox"></input>
        </li>
        <li>
          Whiteboard Challenges <input type="checkbox"></input>
        </li>
        <li>
          Walk the dog <input type="checkbox"></input>
        </li>
      </ul>
    </div>
  )
}

export default ReactTest