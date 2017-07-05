import React,{Component} from 'react';
import {render} from 'react-dom';
import Main from './components/main'; //to render this compnent 

class App extends Component{
	render(){
      return <Main/>   	    
	}
} 
render(<App/>,document.getElementById('app'));//render this component inside the element(div) that has that id 'app' in html