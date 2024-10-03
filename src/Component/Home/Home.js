import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Footer from '../Footer/Footer';
const Home = () => {

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
                <div className="MainHomePage mb-4">

                    <div className="box" id='box1'>

                        <Link to={'/UpdateImage'}>
                            <div className="Image">
                                <img className='img-fluid' src="./Images/H1.gif" alt="" />
                            </div>
                        </Link>

                    </div>

                    <div className="box">
                        <Link to={'/SecondImage'}>
                            <div className="Image">
                                <img className='img-fluid' src="./Images/Home/secondImage.jpg" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to={'/ThirdImage'}>
                            <div className="Image">
                                <img className='img-fluid' src="./Images/H3.gif" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to={'/FourthImage'}>
                            <div className="Image">
                                <img className='img-fluid' src="./Images/H4.jpg" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to={'/FifthImage'}>
                            <div className="Image">
                                <img className='img-fluid' src="./Images/H5.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



            <div>
                <Footer />
            </div>

        </div >

    )
}

export default Home