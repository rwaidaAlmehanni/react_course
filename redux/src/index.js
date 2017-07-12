import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter) //will create DB(store)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()} // will get the curent value
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })} //call reducer with this action
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })} //call reducer with this action
  />,
  rootEl
)

render()
store.subscribe(render)   //to render the view