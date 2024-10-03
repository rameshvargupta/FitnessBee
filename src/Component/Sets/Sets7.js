import React from 'react'
import './Sets.css';

const Sets7 = () => {


    function handleSet1() {
        let set = document.getElementById("set1");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet2() {
        let set = document.getElementById("set2");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet3() {
        let set = document.getElementById("set3");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet4() {
        let set = document.getElementById("set4");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet5() {
        let set = document.getElementById("set5");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet6() {
        let set = document.getElementById("set6");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }
    function handleSet7() {
        let set = document.getElementById("set7");
        set.style.backgroundColor = (set.style.backgroundColor === "#c2c2c2" || set.style.backgroundColor === "") ? "red" : "";
    }


    return (
        <div>
            <div className="sets" id='SetsDetails'>
                <div className="set" onClick={handleSet1} id='set1'>1</div>
                <div className="set" onClick={handleSet2} id='set2'>2</div>
                <div className="set" onClick={handleSet3} id='set3'>3</div>
                <div className="set" onClick={handleSet4} id='set4'>4</div>
                <div className="set" onClick={handleSet5} id='set5'>5</div>
                <div className="set" onClick={handleSet6} id='set6'>6</div>
                <div className="set" onClick={handleSet7} id='set7'>7</div>
            </div>
        </div>
    )
}

export default Sets7