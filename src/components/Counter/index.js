import {Component} from 'react'
import './index.css'
class Couner extends Component {
  state = {count: 0}
  onIncreament = () => {
    this.setState(preState => {
      console.log(`curreent state${preState.count}`)
      return {count: preState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(preState => {
      console.log(`curreent state${preState.count}`)
      return {count: preState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncreament}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Couner
