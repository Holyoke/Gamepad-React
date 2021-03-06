import React from 'react'

class ColorMeter extends React.Component {
  render () {
    let { percentage } = this.props
    let colorNumber = parseInt((percentage + 0.30) * 255)
    let color

    // logic
    // percentages turns green as it approaches 0.70
    // turns red if over 0.70
    if (percentage >= 0.70) {
      color = `rgb(255, 0, 0)`
    } else if (percentage > 0.60 && percentage < 0.70) {
      color = `rgb(0, 255 , 0)`
    } else {
      color = `rgb(255, 255, 0)`
    }

    let squareStyle = {
      width: '5em',
      height: '5em',
      border: `1px solid ${color}`,
      backgroundColor: color
    }

    let meterStyle = {
      display: 'flex',
      justifyContent: 'center'
    }

    return (
      <div className='color-meter' style={meterStyle}>
        <div className="color-square" style={squareStyle}>
        <pre>%{(percentage * 100).toPrecision(3)}</pre>
        </div>
      </div>
  ) }
}

export default ColorMeter
