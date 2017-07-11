import React,{Component} from 'react';
import {react} from 'react-dom';

class TodoItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <li><input type="checkbox"/>{this.props.name}</li>
	}

}
export default TodoItem;