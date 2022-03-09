import React from 'react'
import ReactDOM from 'react-dom'
import SnakeGame from '../SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>Snake Game</h1>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
)
