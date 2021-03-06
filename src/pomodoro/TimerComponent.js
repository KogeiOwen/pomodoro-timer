import React, { useState } from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import TimerSegment from "./TimerSegment";
export default function TimerComponent ({timerObject, setTimerObject,isTimerRunning})
{
    switch(timerObject.state)
    {
        case "stop":
            return (
                <div></div>
            )
            break;
        case "focus":
            
            if(isTimerRunning)
            {
                let width = 1-((timerObject.focusSeconds)/(timerObject.focusDuration*60));
                width = width*100;
           // console.log(width)
            return <TimerSegment 
            durationString={ `Focusing for ${minutesToDuration(timerObject.focusDuration)} minutes`} 
            width ={width} 
            timeString={`${secondsToDuration(timerObject.focusSeconds)} remaining`}
            pause= {false}
            />
            }
            else
            {
                let width = 1-((timerObject.focusSeconds)/(timerObject.focusDuration*60));
                width = width*100;
                // console.log(width)
                return <TimerSegment
                durationString={ `Focusing for ${minutesToDuration(timerObject.focusDuration)} minutes`} 
                width ={width} 
                timeString={`${secondsToDuration(timerObject.focusSeconds)} remaining`}
                pause= {true}
                /> 
            }
            break;
            case "break":
               
                if(isTimerRunning)
                {
                    let width = 1-((timerObject.breakSeconds)/(timerObject.breakDuration*60));
                    width = width*100;
               // console.log(width)
                return <TimerSegment 
                durationString={ `On Break for ${minutesToDuration(timerObject.breakDuration)} minutes`} 
                width ={width} 
                timeString={`${secondsToDuration(timerObject.breakSeconds)} remaining`}
                pause= {false}
                />
               
                }  
                else{
                    let width = 1-((timerObject.breakSeconds)/(timerObject.breakDuration*60));
                    width = width*100;
                    return <TimerSegment 
                durationString={ `On Break for ${minutesToDuration(timerObject.breakDuration)} minutes`} 
                width ={width} 
                timeString={`${secondsToDuration(timerObject.breakSeconds)} remaining`}
                pause= {true}
                />

                }
        }
    
   
}