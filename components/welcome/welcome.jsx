import React from 'react'
import {Link} from 'react-router-dom'

class WelcomeContainer extends React.Component {
  render () {
    return (
      <div>
        <h1>Shield Drop Trainer</h1>
        <p>Welcome to Scrugg's Shield drop.</p>
        <Link to="/Debug">Debug</Link>
        <Link to="/trainer">Trainer</Link>
      </div>
    )
  }
}

export default WelcomeContainer
