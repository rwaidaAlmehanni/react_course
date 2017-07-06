import React,{Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
	}
	componentWillMount(){//this function will execute just for once before the first render ...
		fetch('http://swapi.co/api/people/?format=json')
		.then(response => response.json())
		.then(({results:data}) => this.setState({data}))
	  }
	  filterFun(e){
	  	this.setState({filter:e.target.value})//will create new state when there is value in the input
	  }
	render(){
		let items=this.state.data;
		console.log("hkhkjhjk")
		if(this.state.filter){//test if there is new state call filter ...
			items=items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())) //will create array of data that like the input ...  
		}
		//will make bind when the input have value ...
      return <div>
             <input type="text" onChange={this.filterFun.bind(this)}/> 
             {items.map(item => <h5>{item.name}</h5>)}
             </div>    	    
	}
}

render(<App/>,document.getElementById('app'));//render this component inside the element(div) that has that id 'app' in html