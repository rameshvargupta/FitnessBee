import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';


const Guides = () => {

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
                            <li><Link className='active' to={'/Guides'}>GUIDES</Link></li>
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
                            <li><Link className='active' to={'/Guides'}>GUIDES</Link></li>
                            <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
                            <li><Link to={'/Community'}>COMMUNITY</Link></li>
                            <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
                            <li><Link to={'/Support'}>SUPPORT</Link></li>
                        </div>


                    </div>

                </div>
            </div>

            <div className="MainComponent RespComponent">

                <div className="topWDetails">
                    <p><strong>150+ guides in the database.</strong> <span>LOAD FILTER</span></p>
                </div>

                <div className="WorkOutsImage mb-3">
                    <div className="row">

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/1.jpg" alt="" />
                                    <figcaption>
                                        How To Fix Loneliness
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/2.jpg" alt="" />
                                    <figcaption>
                                        How To Age Slower
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/3.jpg" alt="" />
                                    <figcaption>
                                        Non-Exercise Activity Thermogenesis (NEAT) - What Is It And How It Benefits Your Fitness
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/4.jpg" alt="" />
                                    <figcaption>
                                        Vegus Nerve:Fuction & Activation How-To
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/5.jpg" alt="" />
                                    <figcaption>
                                    Physical Training And A Woman's Hormone Cycle
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/6.jpg" alt="" />
                                    <figcaption>
                                    The Benefits Of Low Intensity Interval Training (LIIT)
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/7.jpg" alt="" />
                                    <figcaption>
                                    How To Get Rid Of Loose Skin After Weight Loss
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/8.jpg" alt="" />
                                    <figcaption>
                                    How To Have More Energy
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/9.jpg" alt="" />
                                    <figcaption>
                                    How To Choose Dumbbells
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/10.jpg" alt="" />
                                    <figcaption>
                                    How To Improve Grip Strength
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/11.jpg" alt="" />
                                    <figcaption>
                                    How To Start With Exercise If You’re Overweight
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/12.jpg" alt="" />
                                    <figcaption>
                                    How to Breathe Correctly During Exercise
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/13.jpg" alt="" />
                                    <figcaption>
                                    A Complete Guide To Spinning Kicks
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/14.jpg" alt="" />
                                    <figcaption>
                                    How To Stay Healthier Longer
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/15.jpg" alt="" />
                                    <figcaption>
                                    Training On The Weekends vs Training Every Day 
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/16.jpg" alt="" />
                                    <figcaption>
                                    How To Best Use Exercise To Relieve Anxiety and Depression
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/17.jpg" alt="" />
                                    <figcaption>
                                    How Exercise Can Reduce Stress And Help You Lose Weight
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/18.jpg" alt="" />
                                    <figcaption>
                                    The Best Time Of The Day To Exercise
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/19.jpg" alt="" />
                                    <figcaption>
                                    The Guide to Metabolism
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/20.jpg" alt="" />
                                    <figcaption>
                                    How To Exercise Twice a Day
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-4 ">
                            <div className="Image" title='Ringbearer'>
                                <figure>
                                    <img className='img-fluid' src="./Images/Guides/21.jpg" alt="" />
                                    <figcaption>
                                    How To Make Your Legs Stronger
                                    </figcaption>
                                </figure>
                            </div>
                        </div>





                    </div>
                </div>

                <div className="numberOfPage py-4">
                    <div className="page activePage">1</div>
                    <div className="page">2</div>
                    <div className="page">3</div>
                    <div className="page">4</div>
                    <div className="page">5</div>
                    <div className="page">6</div>
                    <div className="page">7</div>
                    <div className="page">8</div>

                </div>

            </div>

            <div>
                <Footer />
            </div>


        </div>
    )
}

export default Guides