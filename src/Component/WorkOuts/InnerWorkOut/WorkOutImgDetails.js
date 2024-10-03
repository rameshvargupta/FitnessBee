import React, { useEffect, useState } from 'react'
import WorkOutImgData from '../WorkOutImgData'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Timer from '../../Timer/Timer'
import Sets7 from '../../Sets/Sets7'
import downLoad from '../../../Images/WorkOuts/download.jpg'



const WorkOutImgDetails = () => {

    const [myImageDetails, setMyImageDetails] = useState({})
    const { bImage, fullBodyImg, focusImg, typeImg, difficultyImg, imgDetails, extraCredit, downloadLink } = myImageDetails;
    const { id } = useParams();

    useEffect(() => {
        let data = WorkOutImgData.filter((item) => item.id == id)
        setMyImageDetails(data[0])
    }, [])


    function openNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "270px";
    }

    function closeNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "0";
    }

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
                                <img src="../../../Images/MainLogo.png" alt="" />
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

            <div className="MainComponent RespComponent ">

                <div className="SecondImage">

                    <div className="Image">
                        <img className='img-fluid' src={bImage} alt="" />
                    </div>

                    <div className='handleEvent mt-4'>
                        <div className="timing">
                            <strong onClick={handelClickTimer} style={{ cursor: "pointer" }}>TIMER+</strong>
                            <Timer />
                        </div>
                        <div className="Sets" style={{ cursor: "pointer" }}>
                            <strong onClick={handelClickSets}>SETS</strong>
                            <div className='mt-3'>
                                <Sets7 />
                            </div>
                        </div>
                    </div>


                    <div className="fitnessSectionImg">
                        <div className="bodyImg">
                            <div className="InnerImage">
                                <img className='img-fluid' src={fullBodyImg} alt="" />
                            </div>
                        </div>

                        <div className="typeImg">

                            <div className="InnerImage">
                                <img className='img-fluid' src={focusImg} alt="" />
                            </div>
                            <div className="InnerImage">
                                <img className='img-fluid' src={typeImg} alt="" />
                            </div>
                            <div className="InnerImage">
                                <img className='img-fluid' src={difficultyImg} alt="" />
                            </div>
                        </div>

                        <hr />

                        <div className="downloadDetails">

                            <div className="fitnessDecription">
                                <p>{imgDetails}</p>
                                <p>
                                    <strong>Extra Credit:</strong> {extraCredit}
                                </p>
                            </div>

                            <div className="downloadImg">
                                <a target='blank' href={downloadLink}>
                                    <img title='download' src={downLoad} alt="" />
                                </a>
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

export default WorkOutImgDetails
