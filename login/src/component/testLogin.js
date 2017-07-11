import React,{Component , PropTypes} from 'react';
import {render} from 'react-dom';

class TestLogin extends Component{
	constructor(props){
		super(props);
	}
	render(){
      return (
      	<dialog open={this.props.open}>
		        UserName:<p>{this.props.userName}</p>
		        Password:<p>{this.props.password}</p>
		        <br/>
		        <input type="button" value="Confirm" onClick={this.props.onConfirm}/>
		       </dialog>
		       );
	}
}

TestLogin.propTypes={
 userName: PropTypes.string,
 password: PropTypes.string,
 open: PropTypes.bool,
 onConfirm: PropTypes.func
}

export default TestLogin;