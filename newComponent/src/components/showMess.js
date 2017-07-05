import React,{Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ShowMess extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<dialog open={this.props.open}>
		        Title:<p>{this.props.title}</p>
		        Definition:<p>{this.props.definition}</p>
		        <br/>
		        <input type="button" value="Confirm" onClick={this.props.onConfirm}/>
		       </dialog>
		       );

	}
}

ShowMess.propTypes = {
 title: PropTypes.string,
 definition: PropTypes.string,
 open: PropTypes.bool,
 onConfirm: PropTypes.func
};

export default ShowMess;