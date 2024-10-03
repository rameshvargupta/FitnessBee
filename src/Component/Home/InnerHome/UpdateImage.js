import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';
import Timer from '../../Timer/Timer';
import UpdateImgData from './UpdateImgData';



const UpdateImage = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    function prev() {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    function next() {
        if (currentImageIndex < UpdateImgData.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);

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

                <div className="UpdateImage">

                    <div className="Image">

                        <img className='img-fluid sliderImage' src={UpdateImgData[currentImageIndex].image} alt="" />

                    </div>

                    <hr />

                    <div>
                        <div style={{textAlign:"center", cursor:"pointer"}} onClick={handelClick}><strong>+ TIMER</strong></div>
                        <Timer />
                    </div>

                    <div className="button pb-4">
                        <button onClick={prev}>PREV</button>
                        <button onClick={next}>NEXT</button>
                    </div>

                </div>

            </div>


            <div className='mt-3'>
                <Footer />
            </div>

        </div >

    )
}

export default UpdateImage