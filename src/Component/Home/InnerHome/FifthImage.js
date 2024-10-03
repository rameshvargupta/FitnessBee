import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';
import '../../Common.css';
import Timer from '../../Timer/Timer';
import Sets from '../../Sets/Sets';

const FifthImage = () => {

    const [showImg, setShowImg] = useState("default");

    function openNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "270px";
    };

    function closeNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "0";
    };


    function handelClickTimer() {
        let timer = document.getElementById('TimerDetails');
        if (timer.style.height === '0px' || timer.style.height === '') {
            timer.style.height = '95px';
        } else {
            timer.style.height = '0px';
        }
    }

    function handelClickSets() {
        let Sets = document.getElementById('SetsDetails');
        if (Sets.style.height === '0px' || Sets.style.height === '') {
            Sets.style.height = '111px';
        } else {
            Sets.style.height = '0px';
        }
    }

    function handleShowDay1() {
        let day = document.getElementById("day1");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay2() {
        let day = document.getElementById("day2");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay3() {
        let day = document.getElementById("day3");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay4() {
        let day = document.getElementById("day4");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay5() {
        let day = document.getElementById("day5");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay6() {
        let day = document.getElementById("day6");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay7() {
        let day = document.getElementById("day7");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay8() {
        let day = document.getElementById("day8");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay9() {
        let day = document.getElementById("day9");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay10() {
        let day = document.getElementById("day10");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay11() {
        let day = document.getElementById("day11");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay12() {
        let day = document.getElementById("day12");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay13() {
        let day = document.getElementById("day13");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay14() {
        let day = document.getElementById("day14");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }
    function handleShowDay15() {
        let day = document.getElementById("day15");
        day.style.display = day.style.display === "none" || day.style.display === "" ? "block" : "none";
    }





    return (
        <div onClick={closeNav}>

            <div className="Navbar RespComponent">

                <div className="MenuBar">

                    <div className=" MainLogo">

                        <div className="smallcart" onClick={openNav}>
                            <i class="fa-solid fa-bars"></i>
                        </div>

                        <Link to={'/'} >
                            <div className="logo">
                                <img src="./Images/MainLogo.png" alt="" />
                            </div>
                        </Link>

                    </div>

                    <div className="MenuDetails">

                        <div className="BigMenu">
                            <li><Link to={'/WorkOuts'}>WORKOUTS</Link></li>
                            <li><Link to={'/Programs'}>PROGRAMS</Link></li>
                            <li><Link to={'/Challenges'}>CHALLENGES</Link></li>
                            <li><Link to={'/Guides'}>GUIDES</Link></li>
                            <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
                            <li><Link to={'/Community'}>COMMUNITY</Link></li>
                            <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
                            <li><Link to={'/Support'} className='highlight'>SUPPORT</Link></li>
                        </div>



                        <div id="mySidenav" class="MobileMenu" onClick={openNav}>
                            <button class="openbtn" onClick={closeNav}>X</button>
                            <li><Link to={'/WorkOuts'}>WORKOUTS</Link></li>
                            <li><Link to={'/Programs'}>PROGRAMS</Link></li>
                            <li><Link to={'/Challenges'}>CHALLENGES</Link></li>
                            <li><Link to={'/Guides'}>GUIDES</Link></li>
                            <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
                            <li><Link to={'/Community'}>COMMUNITY</Link></li>
                            <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
                            <li><Link to={'/Support'}>SUPPORT</Link></li>
                        </div>


                    </div>

                </div>
            </div>

            <div className="MainComponent RespComponent">

                <div className="SelectMainImg">

                    <div className="changeData" style={{ display: showImg === "default" ? "block" : "none" }}>

                        <div className="Image">
                            <img className='img-fluid' src="./Images/Home/InnerFifthMainImage.jpg" alt="" />
                        </div>

                        <div className="FifthImgDetails">
                            <div>
                                <p>Recovery is a 15-day very light exercise program designed to help you stay active while being ill, recover faster and get back on your feet sooner. It includes stretching and breathing exercises, yoga and light cardio to keep your lungs engaged and working without putting your body under additional stress. It’s perfect for anyone who is coming out of having a cold, flu or Covid or is experiencing lighter symptoms - or simply not quite ready for longer and more demanding sessions.</p>

                                <p><i>Note</i>: Not recommended if you are experiencing high temperature or running a fever.
                                </p>

                            </div>

                            <div className="img">
                                <a target='blank' href="https://darebee.com/images/programs/recovery/preview.jpg"><img src="./Images/Home/preview.jpg" alt="" /></a>
                                <a target='blank' href="https://darebee.com/pdf/programs/recovery.pdf"><img src="./Images/Home/download.jpg" alt="" /></a>
                            </div>

                        </div>
                    </div>


                    <div className="UpdateImg">

                        <div style={{ display: showImg === "day1" ? "block" : "none" }}>

                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay1.jpg" alt="" />
                            </div>
                        </div>

                        <div style={{ display: showImg === "day2" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay2.jpg" alt="" />
                            </div>
                        </div>

                        <div style={{ display: showImg === "day3" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay3.jpg" alt="" />
                            </div>

                        </div>
                        <div style={{ display: showImg === "day4" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay4.jpg" alt="" />
                            </div>

                        </div>
                        <div style={{ display: showImg === "day5" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay5.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day6" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay6.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day7" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay7.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day8" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay8.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day9" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay9.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day10" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay10.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day11" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay11.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day12" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay12.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day13" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay13.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day14" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay14.jpg" alt="" />
                            </div>
                        </div>
                        <div style={{ display: showImg === "day15" ? "block" : "none" }}>
                            <div className="Image" >
                                <img className='img-fluid' src="./Images/Home/FifthDay15.jpg" alt="" />
                            </div>
                        </div>

                        <div className='handleEvent mt-4'>
                            <div className="timing">
                                <strong onClick={handelClickTimer} style={{ cursor: "pointer" }}>TIMER+</strong>
                                <Timer />
                            </div>

                            <div className="Sets" style={{ cursor: "pointer" }}>
                                <strong onClick={handelClickSets}>SETS</strong>
                                <div className='mt-3'><Sets /></div>
                            </div>
                        </div>


                    </div>


                    <div className="programIndexDetails">
                        <h4>Program Index</h4>
                        <div className="IndexContainer">

                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day1")}>DAY 1</div>
                                <div className="true" onClick={handleShowDay1} >
                                    <i id='day1' className="fa-solid fa-check"></i>
                                </div>
                            </div>

                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day2")}>DAY 2</div>
                                <div className="true" onClick={handleShowDay2}>
                                    <i id='day2' className="fa-solid fa-check"></i>
                                </div>
                            </div>

                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day3")}>DAY 3</div>
                                <div className="true" onClick={handleShowDay3}>
                                    <i id='day3' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day4")}>DAY 4</div>
                                <div className="true" onClick={handleShowDay4}>
                                    <i id='day4' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day5")}>DAY 5</div>
                                <div className="true" onClick={handleShowDay5}>
                                    <i id='day5' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day6")}>DAY 6</div>
                                <div className="true" onClick={handleShowDay6}>
                                    <i id='day6' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day7")}>DAY 7</div>
                                <div className="true" onClick={handleShowDay7}>
                                    <i id='day7' className="fa-solid fa-check"></i>
                                </div>
                            </div>

                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day8")}>DAY 8</div>
                                <div className="true" onClick={handleShowDay8}>
                                    <i id='day8' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day9")}>DAY 9</div>
                                <div className="true" onClick={handleShowDay9}>
                                    <i id='day9' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day10")}>DAY 10</div>
                                <div className="true" onClick={handleShowDay10}>
                                    <i id='day10' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day11")}>DAY 11</div>
                                <div className="true" onClick={handleShowDay11}>
                                    <i id='day11' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day12")}>DAY 12</div>
                                <div className="true" onClick={handleShowDay12}>
                                    <i id='day12' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day13")}>DAY 13</div>
                                <div className="true" onClick={handleShowDay13}>
                                    <i id='day13' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day14")}>DAY 14</div>
                                <div className="true" onClick={handleShowDay14}>
                                    <i id='day14' className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className="box">
                                <div className="innnerBox" onClick={() => setShowImg("day15")}>DAY 15</div>
                                <div className="true" onClick={handleShowDay15}>
                                    <i id='day15' className="fa-solid fa-check"></i>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>


            </div>


            <div className='mt-3'>
                <Footer />
            </div>

        </div >

    )
}

export default FifthImage