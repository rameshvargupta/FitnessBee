import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';
import '../../Common.css';
import Timer from '../../Timer/Timer';



const ThirdImage = () => {

    function openNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "270px";
    }

    function closeNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "0";
    }

    function handelClick() {
        let timer = document.getElementById('TimerDetails');
        if (timer.style.height === '0px' || timer.style.height === '') {
            timer.style.height = '95px';
        } else {
            timer.style.height = '0px';
        }
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

                <div className="SecondImage">

                    <div className="Image">
                        <img className='img-fluid' src="./Images/Home/InnerThirdMainImage.jpg" alt="" />
                    </div>

                    <div className="trackingDetails">

                        <div className="proTracking">
                            <div className="ftLine"></div>
                            <div className="midLine">Progress Tracking</div>
                            <div className="ltLine"></div>
                        </div>

                        <div className="proSelector">

                            <div className="box" id="box-1">1</div>
                            <div className="box" id="box-2">2</div>
                            <div className="box" id="box-3">3</div>
                            <div className="box" id="box-4">4</div>
                            <div className="box" id="box-5">5</div>
                            <div className="box" id="box-6">6</div>
                            <div className="box" id="box-7">7</div>
                            <div className="box" id="box-8">8</div>
                            <div className="box" id="box-9">9</div>
                            <div className="box" id="box-10">10</div>
                            <div className="box" id="box-11">11</div>
                            <div className="box" id="box-12">12</div>
                            <div className="box" id="box-13">13</div>
                            <div className="box" id="box-14">14</div>
                            <div className="box" id="box-15">15</div>
                            <div className="box" id="box-16">16</div>
                            <div className="box" id="box-17">17</div>
                            <div className="box" id="box-18">18</div>
                            <div className="box" id="box-19">19</div>
                            <div className="box" id="box-20">20</div>
                            <div className="box" id="box-21">21</div>
                            <div className="box" id="box-22">22</div>
                            <div className="box" id="box-23">23</div>
                            <div className="box" id="box-24">24</div>
                            <div className="box" id="box-25">25</div>
                            <div className="box" id="box-26">26</div>
                            <div className="box" id="box-27">27</div>
                            <div className="box" id="box-28">28</div>
                            <div className="box" id="box-29">29</div>
                            <div className="box" id="box-30">30</div>

                        </div>

                        <div className="proTracking ProTracking mt-3">
                            <div className="ftLine"></div>
                            <div className="midLine" onClick={handelClick}>Timer</div>
                            <div className="ltLine"></div>
                        </div>

                        <div style={{ marginTop: "-10px" }}><Timer /></div>

                        <div className="downLoadpdf" style={{ marginTop: "-25px" }}>
                            <div className="downloadImg">
                                <a title='download' target='blank' href="./Images/Home/downloadImage2.pdf"> <img src="./Images/Home/download2.jpg" alt="" /></a>
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

export default ThirdImage