// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {click: 0}

  noOfTimeClick = () => {
    this.setState(prevState => ({click: prevState.click + 1}))
  }

  render() {
    const {click} = this.state
    return (
      <div className="Container">
        <h1 className="heading">
          The Button has been clicked <span className="number">{click}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.noOfTimeClick} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
