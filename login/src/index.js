import React,{Component,propTypes} from 'react';
import {render} from 'react-dom';
import Main from './component/main';

class App extends Component{
	constructor(){
		super();	
	}
	render(){
		return <Main/>    			
   }
}

render(<App/>,document.getElementById('app'));//render this component inside the element(div) that has that id 'app' in html