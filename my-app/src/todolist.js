import React ,{Component} from 'react';
import {react} from 'react-dom';

import TodoItem from './todoItem';

class Todolist extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>
                 <ul>
                  {this.props.todos.map(todo => <TodoItem key={todo.id} name={todo.name}/>)}
                 </ul>
		       </div>
	}
}
export default Todolist;