import React,{Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
	constructor(){
		super();
		this.state={
			counter:0
		}
	}
	_update(){
		this.setState({
			counter:this.state.counter+1
		})
	}
	render(){
      return<button onClick={this._update.bind(this)}>{this.state.counter}</button>    	    
	}
} 
render(<App/>,document.getElementById('app'));//render this component inside the element(div) that has that id 'app' in html