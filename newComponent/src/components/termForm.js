import React,{Component, PropTypes} from 'react';
import {react} from 'react-dom';

class TermForm extends Component{
	constructor() {
     super();
     this.state = {
       title: '',
       definition: '',
       isSubmitted: false
     };
   }
   _onTitleChange(e){//function let us change the value of the title state 
   	this.setState({title:e.target.value});
   }
   _onDefinitionChange(e){
   	this.setState({definition:e.target.value});
   }
   _onSubmit(e){
   	console.log(e);
    this.setState({isSubmitted:true});
    this.props.submitFun(this.state.title,this.state.definition);
   }
	render() {
    return (
   <form>
     Term Title<br/>
     <input type="text" value={this.state.title} onChange={this._onTitleChange.bind(this)}/>
     <br/><br/>
     Term Definition<br/>
     <textarea rows={10} value={this.state.definition} onChange={this._onDefinitionChange.bind(this)}/>
     <br/><br/>
     <input type="button" value="Submit" onClick={this._onSubmit.bind(this)}/>
     </form>
 );
}
}

TermForm.propTypes = {
	submitFun: PropTypes.func
};
export default TermForm;