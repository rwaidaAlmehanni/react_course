import React,{Component} from 'react';
import {react} from 'react-dom';

 export class Link extends Component{
 	  render(){
 	  	return <a href={this.props.href}>{this.props.name}</a>
 	  }
 }

 export default Link;
