 import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import Todolist from './todolist';
import Footer from './footer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[],
      currentvalue:''

    }

  }

  //GET data************************************
  componentDidMount(){ 
    return fetch('http://localhost:8080/todos')
    .then(res=>res.json())
    .then(todos=>this.setState({todos}))
  }

  //POST(add data)******************************
  _addItem(){
    //console.log(this.state.currentvalue)
    return  fetch('http://localhost:8080/todos', { 
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
                  },
            body: JSON.stringify({
                  name: this.state.currentvalue,
                  test: false
                 })
                }).then(res=>console.log("done"))
  }

  //PUT(update data)*********************************
  _updateItem(){
    return  fetch('http://localhost:8080/todos/1', { 
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
                  },
            body: JSON.stringify({
                  name: this.state.currentvalue,
                  test: false   
                 })
                }).then(res=>console.log("done"))
  }

  //DELETE(delete data)******************************
    _deleteItem(){
    return  fetch('http://localhost:8080/todos/4', { 
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',    
                }})
  }

  _changeValue(e){
    
    this.setState({currentvalue:e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         <MuiThemeProvider>
          <div className="App2">
          <RaisedButton label="Add" onClick={this._addItem.bind(this)}/>
         </div> 
        </MuiThemeProvider>

         <MuiThemeProvider>
          <div className="App3">
          <RaisedButton label="Update" onClick={this._updateItem.bind(this)}/>
         </div> 
        </MuiThemeProvider>

        <MuiThemeProvider>
          <div className="App4">
          <RaisedButton label="Delete" onClick={this._deleteItem.bind(this)}/>
         </div> 
        </MuiThemeProvider>

        <Title text="89000000"/>
          <input value={this.state.currentvalue} onChange={this._changeValue.bind(this)}/>
          <Todolist todos={this.state.todos} />
        <Footer/>
       </div>
      
    );
  }
}
//to create nested component ...
const Title=(props)=><h1>Title: {props.text}</h1>
Title.propTypes={
  text(props,propName,component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`) 
    }
    if(props[propName].length<6){
      return new Error(`${propName} too short`)

    }
  }
}

export default App;
