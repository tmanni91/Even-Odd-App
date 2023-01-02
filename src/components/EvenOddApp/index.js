import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNo: 0}

  onIncrement = () => {
    const updateRandomNo = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      randomNo: prevState.randomNo + updateRandomNo,
    }))
  }

  render() {
    const {randomNo} = this.state
    const result = randomNo % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {randomNo}</h1>
          <p className="para">Count is {result}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
