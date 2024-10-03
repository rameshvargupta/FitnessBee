import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const SecondImage = () => {

    function openNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "270px";
    }

    function closeNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "0";
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

                        <img className='img-fluid' src="./Images/Home/InnerSecondImage.jpg" alt="" />

                    </div>


                    <div className="fitnessSectionImg">

                        <div className="bodyImg">

                            <div className="InnerImage">
                                <img className='img-fluid' src="./Images/Home/SecInnerImg1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="typeImg">

                            <div className="InnerImage">
                                <img className='img-fluid' src="./Images/Home/SecInnerImg2.jpg" alt="" />
                            </div>
                            <div className="InnerImage">
                                <img className='img-fluid' src="./Images/Home/SecInnerImg3.jpg" alt="" />
                            </div>
                            <div className="InnerImage">
                                <img className='img-fluid' src="./Images/Home/SecInnerImg4.jpg" alt="" />
                            </div>
                        </div>

                        <hr />

                        <div className="downloadDetails">

                            <div className="fitnessDecription">
                                <p>Tendons are the cables that anchor the muscles to the bones and unleash their power. The Iron Tendons workout will help your tendons get stronger and your movements become more fluid. Plus it will just, generally, make you feel better. Add EC and it becomes quite the challenge.</p>
                                <p><strong>Extra Credit:</strong> Do a 15-count hold instead of 10-count each time.</p>
                            </div>

                            <div className="downloadImg">
                                <a title='download' target='blank' href="./Images/Home/downloadImage.pdf"> <img src="./Images/Home/download.jpg" alt="" /></a>
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

export default SecondImage