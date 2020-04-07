import React from 'react';
import '../App.css';
import sample from '../Assets/vid/watch2.mp4'
import classes from '../Assets/vid/BackgroundVideo.module.css'
import Stopwatch from './Stopwatch'


function Background() {
  return (
    <div className={classes.Container}>
    <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={sample} type='video/mp4' ></source>
          
        </video>
        <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>{"Time waits for no one...".toUpperCase()}</h1>
                    <div className={classes.Stopwatch}>
                    <Stopwatch/>
                    </div>
                    {/*<button type="button" className="btn btn-outline-dark">View the course</button>*/}
                </div>
                
            </div>
         
    </div>
  );
}

export default Background;
