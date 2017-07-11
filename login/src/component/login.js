import React,{Component,PropTypes} from 'react';
import {render} from 'react-dom';
import styles from './style.css';

// import {stateValidation} from 'react-state-validation';

// const stateValidations = {
//   customState: function(state, stateName, componentName) {
//     if (!/%s/.test(state[stateName])) {
//       return new Error('Validation failed!');
//     }
//   }
// }

class Login extends Component{
	constructor(){
		super();
		this.state={
			userName:'',
			password:'',
			isSubmitted: false
		}
	}
	_changUser(e){
		this.setState({userName:e.target.value})
	}
	_changPass(e){
		this.setState({password:e.target.value})
	}
	_onSubmit(e){
		this.setState({isSubmitted:true});
		this.props.changeData(this.state.userName,this.state.password);
	}
	componentWillUpdate(){
		console.log("update")
	}
	render(){

		return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username<span>*</span></label>
                    <input type="text" className="form-control" id="username" value={this.state.userName} onChange={this._changUser.bind(this)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password<span>*</span></label>
                    <input type="password" className="form-control" id="password" value={this.state.password} onChange={this._changPass.bind(this)}  />
                </div>
                    <p className="sign">Forget your password?</p>
                    <input type="button" className="btn btn-primary btn-block" value="LogIn" onClick={this._onSubmit.bind(this)}/>
            </form>
        </div>
        );
	}
}
Login.propTypes={
	changeData:PropTypes.func,
	
}


export default Login;
