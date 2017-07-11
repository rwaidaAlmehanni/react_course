import React,{Component,propTypes} from 'react';
import {render} from 'react-dom';
import Login from './login';
import TestLogin from './testLogin';

class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			userName:'',
			password:'',
			open:false
		}
	}
	_getData(user,pass){
			this.setState({userName:user,password:pass,open:true})
	}
	_onConfirm(e){
		this.setState({open:false})
	}			
	render(){
		return <div>
			<Login changeData={this._getData.bind(this)}/>
			<TestLogin userName={this.state.userName} password={this.state.password} open={this.state.open} onConfirm={this._onConfirm.bind(this)}/>
            </div>    	
			
   }
}

export default Main;