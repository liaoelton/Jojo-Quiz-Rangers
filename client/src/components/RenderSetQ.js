import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import axios from 'axios';

class RenderSetQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question : "",
            option_a : "",
            option_b : "",
            option_c : "",
            option_d : "",
            answer : "",
            bywhom : ""
        };
    }
    setQ = i => this.setState(state => ({question : i}))
    setOption_a = i => this.setState(state => ({option_a : i}))
    setOption_b = i => this.setState(state => ({option_b : i}))
    setOption_c = i => this.setState(state => ({option_c : i}))
    setOption_d = i => this.setState(state => ({option_d : i}))
    setAns = i => this.setState(state => ({answer : i}))
    setByWhom= i => this.setState(state => ({bywhom : i}))
    handleInput_q = e =>{this.setQ(e.target.value);}
    handleInput_a = e =>{this.setOption_a(e.target.value);}
    handleInput_b = e =>{this.setOption_b(e.target.value);}
    handleInput_c = e =>{this.setOption_c(e.target.value);}
    handleInput_d = e =>{this.setOption_d(e.target.value);}
    handleInput_ans = e =>{this.setAns(e.target.value);}
    handleInput_whom = e =>{this.setByWhom(e.target.value);}
    
    handleChange = e => {
        const value = e.target.value;
        
        this.setState({
          answer : value
        });
        console.log(this.state.answer);
    };

    handleClick = ()=>{
        console.log("click");
        var ans;
        if(this.state.answer === 'a'){ ans = this.state.option_a;}
        else if(this.state.answer === 'b'){ ans = this.state.option_b;}
        else if(this.state.answer === 'c'){ ans = this.state.option_c;}
        else if(this.state.answer === 'd'){ ans = this.state.option_d;}
        const newQ = {
            question : this.state.question,
            option_a : this.state.option_a,
            option_b : this.state.option_b,
            option_c : this.state.option_c,
            option_d : this.state.option_d,
            answer : ans,
            bywhom : this.state.bywhom
        };

        axios.post('http://localhost:4000/questions/add', newQ)
            .then(res => console.log(res.data));
        this.setQ("");
        this.setAns("");
        this.setOption_a("");
        this.setOption_b("");
        this.setOption_c("");
        this.setOption_d("");
        this.setByWhom("");

    }

	render() {
		return (
			<div style={{display:'block',left : '50%',textAlign : 'center',display: '', justifyContent:'center',width:'500px'}}>
                <form>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.bywhom} onChange={this.handleInput_whom}></input>
                <label htmlFor="nme"><span>enter your name:(optional)</span></label>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.question} onChange={this.handleInput_q}></input>
                <label htmlFor="nme"><span>enter question:</span></label>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.option_a} onChange={this.handleInput_a}></input>
                <label htmlFor="nme"><span>enter option a:</span></label>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.option_b} onChange={this.handleInput_b}></input>
                <label htmlFor="nme"><span>enter option b:</span></label>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.option_c} onChange={this.handleInput_c}></input>
                <label htmlFor="nme"><span>enter option c:</span></label>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" value={this.state.option_d} onChange={this.handleInput_d}></input>
                <label htmlFor="nme"><span>enter option d:</span></label>
                <div style={{textAlign:'justify',color: '#fff',margin:'10px',  top: '-54px'}}>
                    <span style={{display:'inline',}}>what is your ans:</span>
                    <form style={{display:'inline'}}> 
                        <input
                            type="radio"
                            value="a"
                            checked={this.state.answer === "a"}
                            onChange={this.handleChange}
                            style = {{display: 'inline-block'}}
                        />a
                        <input
                            type="radio"
                            value="b"
                            checked={this.state.answer === "b"}
                            onChange={this.handleChange}
                            style = {{display: 'inline-block'}}
                        />b
                        <input
                            type="radio"
                            value="c"
                            checked={this.state.answer === "c"}
                            onChange={this.handleChange}
                            style = {{display: 'inline-block'}}
                        />c
                        <input
                            type="radio"
                            value="d"
                            checked={this.state.answer === "d"}
                            onChange={this.handleChange}
                            style = {{display: 'inline-block'}}
                        />d
                    </form>
                    </div>
                </form>
                <button  className="skewBtn blue"onClick = {this.handleClick} 
                        disabled = {!(this.state.question && 
                                    this.state.option_a && 
                                    this.state.option_b && 
                                    this.state.option_c && 
                                    this.state.option_d && 
                                    this.state.answer)}>
                ok</button>
                <NavLink to="/"><button className="skewBtn blue">back</button></NavLink>
            </div>
		);
	}
}

export default RenderSetQ;