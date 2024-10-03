import React, { useState } from 'react';
import './Timer.css';
let stopTime = undefined;

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [disbtn, setDisbtn] = useState(false);
    const [disbtn2, setDisbtn2] = useState(true);

    const startTimer = () => {
        stopTime = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(stopTime);
                    setDisbtn(false);
                    return prevTimer;
                }
            });
            setDisbtn(true);
            setDisbtn2(false);

        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(stopTime);
        setDisbtn(false);
        setDisbtn2(true);
    };

    const resetTimer = () => {
        clearInterval(stopTime);
        setTimer(0);
        setDisbtn(false);
        document.getElementById("30Sec").style.display = "block";
        document.getElementById("60Sec").style.display = "block";
        document.getElementById("2Min").style.display = "block";
        document.getElementById("Custom").style.display = "block";

        document.getElementById("start").style.display = "none";
        document.getElementById("pause").style.display = "none";
        document.getElementById("reset").style.display = "none";

    };

    function handle30Sec() {
        setTimer(30);
        document.getElementById("start").style.display = "block";
        document.getElementById("pause").style.display = "block";
        document.getElementById("reset").style.display = "block";


        document.getElementById("60Sec").style.display = "none";
        document.getElementById("2Min").style.display = "none";
        document.getElementById("Custom").style.display = "none";
    }
    function handle60Sec() {
        setTimer(60);
        document.getElementById("start").style.display = "block";
        document.getElementById("pause").style.display = "block";
        document.getElementById("reset").style.display = "block";


        document.getElementById("30Sec").style.display = "none";
        document.getElementById("2Min").style.display = "none";
        document.getElementById("Custom").style.display = "none";
    }

    function handle2Min() {
        setTimer(120);
        document.getElementById("start").style.display = "block";
        document.getElementById("pause").style.display = "block";
        document.getElementById("reset").style.display = "block";


        document.getElementById("60Sec").style.display = "none";
        document.getElementById("30Sec").style.display = "none";
        document.getElementById("Custom").style.display = "none";
    }
    function handleCustom() {
        document.getElementById("start").style.display = "block";
        document.getElementById("pause").style.display = "block";
        document.getElementById("reset").style.display = "block";


        document.getElementById("60Sec").style.display = "none";
        document.getElementById("2Min").style.display = "none";
        document.getElementById("30Sec").style.display = "none";
    }




    return (
        <div className="text-center">
            <div className="TimerComponent my-3">
                <div className="Timer" id="TimerDetails">

                    <button className="showtime">{timer}</button>
                    <button className="30Sec" id='30Sec' onClick={handle30Sec}>30 SEC</button>
                    <button className="60Sec" id='60Sec' onClick={handle60Sec}>60 SEC</button>
                    <button className="2Min" id='2Min' onClick={handle2Min}>2 MIN</button>
                    <button className="Custom" id='Custom' onClick={handleCustom}>CUSTOM</button>
                    <button disabled={disbtn} className="start" id='start' onClick={startTimer}>
                        START
                    </button>
                    <button disabled={disbtn2} className="pause" id='pause' onClick={stopTimer}>
                        PAUSE
                    </button>
                    <button disabled={disbtn} className="reset" id='reset' onClick={resetTimer}>
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;


