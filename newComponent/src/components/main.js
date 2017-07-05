import React,{Component} from 'react';
import {render} from 'react-dom';
import ShowMess from './showMess';
import TermForm from './termForm';

class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			open:false,
			title:'',
			definition:''
		}
	}
	_onSubmit(t,d){
		this.setState({title:t,definition:d,open:true});
	}
	_onConfirmFun(){
		this.setState({open:false})
	}
	render(){
		return <div>
                <TermForm submitFun={this._onSubmit.bind(this)} />
                <ShowMess title={this.state.title} definition={this.state.definition} open={this.state.open} onConfirm={this._onConfirmFun.bind(this)} />
		       </div>

	}

}


export default Main;