import React, { Component } from "react";
import "../App.css";
import "../Assets/vid/BackgroundVideo.module.css"
class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
          
        });
        if(this.state.timerTime===0){
            var x= document.createElement('textarea')
            x.setAttribute("id","laptime")
            x.setAttribute("rows",5)
            x.setAttribute("cols",25)
            document.getElementById("lap").appendChild(x)
        }
        
        
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };
      stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };
      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
        document.getElementById('lap').innerHTML=""
      };
      lapTime=()=>{
          this.stopTimer()
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        this.startTimer()
       
            console.log(`${hours} : ${minutes} : ${seconds} : ${centiseconds}`)
            var y=document.getElementById("laptime").value
            document.getElementById('laptime').innerHTML= ` ${hours} : ${minutes} : ${seconds} : ${centiseconds} &#13;&#10; `+ y
    
      }
    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">
            <div className="Stopwatch-display">
                {hours} : {minutes} : {seconds} : {centiseconds}<br/>
               
                { this.state.timerOn === false && this.state.timerTime === 0 && (
                        
                        <button onClick={this.startTimer}><a href="#">START</a></button>
                        )}
                {this.state.timerOn === true && (
                <button onClick={this.stopTimer}><a href="#">STOP</a></button>
                         )}
                {this.state.timerOn === true && (
                <button onClick={this.lapTime}><a href="#">LAPTIME</a></button>
                         )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.startTimer}><a href="#" >RESUME</a></button>
                         )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}><a href="#">RESET</a></button>
                         )}
                         <br/>
                         
                         
            </div>
            <div id ="lap">

                         </div>
            </div>
      </div>
    );
  }
}
export default Stopwatch;