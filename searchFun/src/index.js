import React,{Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
	}
	componentWillMount(){
		fetch('http://swapi.co/api/people/?format=json')
		.then(response => response.json())
		.then(({results:data}) => this.setState({data}))
	  }
	render(){
		let items=this.state.data;
      return <div>
             {items.map(item => <h5>{item.name}</h5>)}
             </div>    	    
	}
} 
render(<App/>,document.getElementById('app'));//render this component inside the element(div) that has that id 'app' in html