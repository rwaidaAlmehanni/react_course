import React,{Component} from 'react';
import {react} from 'react-dom';
import Link from './link';

class Footer extends Component{
	constructor(){
		super();
		this.state={
			links:[{id:"#",name:"home"},{id:"/signup",name:"signup"}]
		}
	}
	render(){
		return <div>
		{this.state.links.map(link=><Link href={link.id} name={link.name} />)}	
		       </div>
	}
}

export default Footer;