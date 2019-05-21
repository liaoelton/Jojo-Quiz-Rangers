import React, { Component } from 'react';

class RenderQuestion extends Component {
	render() {
		return (
			<div style={{ display: 'block',textAlign:'center',justifyContent: 'center',width:'320px'}}>
				<p style={{ fontSize:'32px',display: 'block', color: '#fff'}}>{this.props.id+1}.{this.props.q.question}{(this.props.q.bywhom !== "" || this.props.q.bywhom === "j")? "(by "+this.props.q.bywhom+")":''}</p>	
				<button style={{ display: 'block'}}className="option_button" onClick= {this.props.onclick}>{this.props.q.option_a}</button>
				<button style={{ display: 'block'}}className="option_button" onClick= {this.props.onclick}>{this.props.q.option_b}</button>
				<button style={{ display: 'block'}}className="option_button" onClick= {this.props.onclick}>{this.props.q.option_c}</button>
				<button style={{ display: 'block'}}className="option_button" onClick= {this.props.onclick}>{this.props.q.option_d}</button>
				<p style={{ display: 'block'}}style={{color: '#fff'}}>
					you have {(this.props.left_sec > 5 || this.props.left_sec < 0)?5:this.props.left_sec} seconds left
				</p>
				
			</div>
		);
	}
}

export default RenderQuestion;