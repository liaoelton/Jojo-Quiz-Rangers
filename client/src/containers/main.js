import React, { Component } from 'react';
import RenderQuestion from '../components/RenderQuestion.js';
import { Switch, Route, Redirect } from "react-router-dom";
import RenderSetQ from '../components/RenderSetQ.js';
import RenderHome from '../components/RenderHome.js';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'

function getArrayItems(arr, num) {
    var temp_array = [];
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = [];
    for (var i = 0; i<num; i++ ) {
        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}
var init_question = [
{
answer: "銅鑼燒",
bywhom: "j",
option_a: "鯛魚燒",
option_b: "銅鑼燒",
option_c: "豬血糕",
option_d: "老鼠",
question: "哆啦A夢最喜愛的食物是？",
__v: 0,
_id: "5ce0dbb32b6c49c5971204c8"
},
{answer: "節肢動物門",
bywhom: "j",
option_a: "節肢動物門",
option_b: "腔腸動物門",
option_c: "軟體動物門",
option_d: "棘皮動物門",
question: "「鱟」在生物學上的分類？",
__v: 0,
_id: "5ce0dbe02b6c49c5971204c9",
},
{
answer: "紐約",
bywhom: "j",
option_a: "巴黎",
option_b: "紐約",
option_c: "東京",
option_d: "香港",
question: "「大蘋果」是哪一個城市的名稱？",
__v: 0,
_id: "5ce0dc052b6c49c5971204ca"
},
{
answer: "醫科學生",
bywhom: "j",
option_a: "警察",
option_b: "老師",
option_c: "醫科學生",
option_d: "消防員",
question: "電影終極殺陣2(Taxi 2)中，男主角向女主角爸爸謊稱他是？",
__v: 0,
_id: "5ce0dc262b6c49c5971204cb",
},
{
answer: "先放蛋，後滾水",
bywhom: "j",
option_a: "放在枕頭下孵七七四十九天",
option_b: "先水滾，後放蛋",
option_c: "先放蛋，後滾水",
option_d: "詢問劉昂星",
question: "白煮蛋正確的煮法是？",
__v: 0,
_id: "5ce0f4de2b6c49c5971204cd"
},{
answer: "東寧",
bywhom: "j",
option_a: "鄭經",
option_b: "西寧",
option_c: "東寧",
option_d: "高砂",
question: "鄭經治台時，改國號為什麼國？ ",
__v: 0,
_id: "5ce1006a7d1b2ec6a6953ce6"
},
{
answer: "賀",
bywhom: "j",
option_a: "員",
option_b: "昔",
option_c: "賀",
option_d: "苜",
question: "(猜一個字)目加兩點 莫作貝字猜？",
__v: 0,
_id: "5ce1009f7d1b2ec6a6953ce7"
},
{
answer: "東京",
bywhom: "j",
option_a: "山形",
option_b: "東京",
option_c: "大阪",
option_d: "神戶",
question: "日本名著的明治神宮，位於？ ",
__v: 0,
_id: "5ce100da7d1b2ec6a6953ce8"
},
{
answer: "一個",
bywhom: "j",
option_a: "數十萬個",
option_b: "難以計算",
option_c: "一個",
option_d: "數百萬個",
question: "地球目前總共有幾個自然衛星？",
__v: 0,
_id: "5ce101097d1b2ec6a6953ce9"
},
{
answer: "單子葉",
bywhom: "j",
option_a: "單子葉",
option_b: "雙子葉",
option_c: "多子葉",
option_d: "三子葉",
question: "水稻的子葉是屬於？",
__v: 0,
_id: "5ce1013b7d1b2ec6a6953cea"
},
{
answer: "鄉鎮市區公所",
bywhom: "j",
option_a: "縣市議會",
option_b: "警察局",
option_c: "地方法院",
option_d: "鄉鎮市區公所",
question: "具有公信力的調解委員會設置於何者？",
__v: 0,
_id: "5ce123d57d1b2ec6a6953ceb"
},
{
answer: "莫札特",
bywhom: "j",
option_a: "莫札特",
option_b: "貝多芬",
option_c: "巴哈",
option_d: "柴可夫斯基",
question: "歌劇「費加洛婚禮」為何者作品？",
__v: 0,
_id: "5ce127927d1b2ec6a6953cec"
}
]


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions : init_question,
            now_q : 0,
            grade : 0,
            time : 0,
            point : 0,
            game_state : "ready",
            left_sec : 5,
            c_questions :[],
            player :'',
            isAdd : false,
            grades : []
        };
    }

    next_q = () => this.setState(state => ({now_q : state.now_q+1}))
    setGameState = i => this.setState(state => ({game_state : i}))
    setPoint = i => this.setState(state => ({point : i}))
    setTime = () => this.setState(state => ({start : new Date()}))
    setNowQ = i => this.setState(state => ({now_q : i}))
    setLeftSec = i => this.setState(state => ({left_sec : i}))
    setIsAdd = i => this.setState(state => ({isAdd : i}))
    
    componentDidMount() {
        this.setInterval = setInterval(this.elapseTime.bind(this),1000)
        this.setState({start: new Date()});
        
        axios.get('http://localhost:4000/questions/')
            .then(response => {
                this.setState({ questions: init_question.concat(response.data) });
            })
            .catch(function (error){
                console.log(error);
            })
        axios.get('http://localhost:4000/grades/')
            .then(response => {
                this.setState({ grades: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    elapseTime(){
        var currentTime = new Date();
        var timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
        this.setState({timeElapsed: timeElapsed});
        this.setLeftSec(5-timeElapsed);
        if(timeElapsed >= 5 && this.state.game_state === "playing"){
            if(this.state.now_q < this.state.c_questions.length-1){
                this.next_q();
                this.setTime();
                this.setLeftSec(5);
            }
            else{
                this.handleLastQ();
            }
        }
        else if(this.state.game_state === "ready"){
            this.setTime();
        }
        
    }

    handleLastQ = () => {
        console.log("your point is" + this.state.point);
        clearInterval(this.interval);
        this.setGameState("end");
    }

    handleRestart = () => {
        this.setGameState("ready");
        clearInterval(this.interval);
        this.setPoint(0);
        this.setNowQ(0);
        this.setIsAdd(false);
        axios.get('http://localhost:4000/grades/')
            .then(response => {
                this.setState({ grades: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
        this.setState({player : ""});
    }

    handleClick = e => {
        const ans = e.target.innerText;
        if(this.state.now_q < this.state.c_questions.length-1){
            this.next_q();
            this.setTime();
            if(ans === this.state.c_questions[this.state.now_q].answer){this.setPoint(this.state.point+5+this.state.left_sec);}
            this.setLeftSec(5);
        }
        else{
            if(ans === this.state.c_questions[this.state.now_q].answer){this.setPoint(this.state.point+5+this.state.left_sec);}
            this.handleLastQ();
            
        }
    }
    
    addToBoard = () =>{
        if(this.state.isAdd === false){
            const newG = {
                player : this.state.player,
                grade : this.state.point
            };

            axios.post('http://localhost:4000/grades/add', newG)
                .then(res => console.log(res.data));
            this.setIsAdd(true);
        }
        else {
            console.log("has been added");
        }
    }
    
    handleStart = () => {
        this.setGameState("playing");
        this.setTime();
        this.setLeftSec(5);
        this.setState({questions: init_question});
        axios.get('http://localhost:4000/questions/')
            .then(response => {
                this.setState({questions: init_question.concat(response.data)});
            })
            .catch(function (error){
                console.log(error);
            })
        console.log(this.state.questions);
        this.setState({c_questions: getArrayItems(this.state.questions,(this.state.questions.len <= 10)?  this.state.questions.len:10)});
    }
    
    handlePlayer = e => {
        const value = e.target.value;
        this.setState({player : value});
    };

    render(){
        if(this.state.game_state === "ready"){
            return (
            <BrowserRouter>
            <div>
                <div id="header">
                    <div className = "logo"><a>jojo的知識王</a></div>
                </div>    
                    <Switch>
                        <Route exact path="/" render={() => (
                                <RenderHome handleStart = {this.handleStart} 
                                            onKeyUp={this.handlePlayer} 
                                            grades = {this.state.grades.sort((a, b) => (a.grade > b.grade) ? -1 : 1).slice(0,10)} player = {this.state.player} 
                                            point = {this.state.point} />
                            )}/>
                            
                        <Route exact path="/set" component={RenderSetQ} />
                        <Redirect from="/home" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
            );
        }
        else if (this.state.game_state === "playing"){
            return(<div><RenderQuestion 
                        q={this.state.c_questions[this.state.now_q]} 
                        onclick = {this.handleClick} 
                        left_sec = {this.state.left_sec} 
                        id = {this.state.now_q}
                    />
                    <p style={{ fontSize:'32px',display: 'block', color: '#fff'}}>your point is {this.state.point}</p></div> );
        }
        else if (this.state.game_state === "end"){
            return(
            <div>
                <div className = "logo">
                    <a>jojo的知識王</a>
                </div>
                <p style={{ fontSize:'32px',display: 'block', color: '#fff'}}>your point is {this.state.point}</p>
                <button className="skewBtn blue" onClick = {this.addToBoard}>加入排行榜</button>
                <button className="skewBtn blue" onClick = {this.handleRestart}>back</button>
            </div>
            );
        }
    }
  }
  
  export default Main;
  