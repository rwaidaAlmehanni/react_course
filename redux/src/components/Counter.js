import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.props.value} times
        {' '}
        <button onClick={this.props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd.bind(this)}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync.bind(this)}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter