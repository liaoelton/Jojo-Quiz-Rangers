import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class RenderHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions : [],
            now_q : 0,
            grade : 0,
            time : 0,
            point : 0,
            game_state : "ready",
            left_sec : 5,
        };
    }

	render() {
		return (
			<div style = {{textAlign: 'center', display:'block'}}>
				<div className="sidebar_left" style={{display: 'block',float: 'left'}}>
                    <div>
                        <input type="text" name="name" className="question" id="nme" required autoComplete="off" onKeyUp = {this.props.onKeyUp}></input>
                        <label htmlFor="nme"><span>Name</span></label>
                    </div>  
                    <div >
                        <div className="item button-jittery"><button className="main_button" onClick = {this.props.handleStart} disabled={!this.props.player}>開始啊</button></div>
                        <div className="item button-jittery"><NavLink to="/set" style={{ textDecoration: 'none' }}><button className="main_button">出題摟</button></NavLink></div>
                    </div>
                </div>
                
               
                 
                 <div className="container">
                     <h1 style={{color: '#fff'}}>排行榜</h1>
                     <table><tbody>
                         {this.props.grades.map(e=><tr><th>{e.player}</th><th>{e.grade}</th></tr>)}
                     </tbody></table>
                </div>
            </div>
		);
	}
}

export default RenderHome;