import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';
import DBookData from './DBookData';



const FourthImage = () => {
    console.log(DBookData);

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

                <div className="InnerFourthComponent">
                    <h1>FITNESSBEE BOOKS</h1>
                    <p>Here you will find all book titles we currently have in circulation - you can find them in any local bookstore or online. All of our books contain the same information already available for free through this website.</p>
                    <p>Below you can download a <span style={{ fontSize: "21px", fontWeight: "400" }}>PDF</span> version of each, it is exactly the same version as the book. If a <span style={{ fontSize: "21px", fontWeight: "400" }}>PDF</span> version is all you want, you found it useful and you are not interested in a book, please consider <Link to={'/Support'}><span style={{ fontSize: "21px", fontWeight: "400", color: "red" }}>donating.</span></Link>  The paperback options exist so this project has an extra lifeline giving us higher chances to stay up in six months or five years from now and develop further. After printing and bookstore fees, <span style={{ fontSize: "21px", fontWeight: "400" }}>FITNESSBEE</span> makes $1 from each sale.</p>

                    <div className="downloadBookImage">
                        <div className="row">
                            {DBookData.map((item, index) => {
                                const { id, image } = item;
                                return (
                                    <div className="col-sm-6 col-md-6 col-lg-6 mb-3" key={index}>
                                        <Link to={`/FIDetails${id}`}>
                                            <img className='img-fluid' src={image} alt="" />
                                        </Link>

                                    </div>
                                );
                            })}

                            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">

                                <img className='img-fluid' src='../../../Images/Home/db14.jpg' alt="" />

                                <div className="DwLink">
                                    <span>
                                        <a target='blank' href='https://drive.google.com/file/d/13FSGF2wTQeBPJWeK3zErIavBgdbVVSLW/view'>Download</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.com/dp/1844810011/">Amazon.com</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.de/dp/1844810011/">Amazon.de</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.co.uk/dp/1844810011">Amazon.co.uk</a>
                                    </span>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">

                                <img className='img-fluid' src='../../../Images/Home/db15.jpg' alt="" />

                                <div className="DwLink">
                                    <span>
                                        <a target='blank' href='https://drive.google.com/file/d/1chwuXHywpVZKarV6CRMW6IdFL5gewaIq/view'>Download</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.com/dp/1844810321">Amazon.com</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.de/dp/1844810321">Amazon.de</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.co.uk/dp/1844810321">Amazon.co.uk</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">

                                <img className='img-fluid' src='../../../Images/Home/db16.jpg' alt="" />

                                <div className="DwLink">
                                    <span>
                                        <a target='blank' href='#'>PDF & online program</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.com/dp/184481002X">Amazon.com</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.de/dp/184481002X/">Amazon.de</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.co.uk/dp/184481002X">Amazon.co.uk</a>
                                    </span>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">

                                <img className='img-fluid' src='../../../Images/Home/db17.jpg' alt="" />

                                <div className="DwLink">
                                    <span>
                                        <a target='blank' href='#'>PDF & online program</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.com/dp/1844810003">Amazon.com</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.de/dp/1844810003/">Amazon.de</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.co.uk/dp/1844810003">Amazon.co.uk</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">

                                <img className='img-fluid' src='../../../Images/Home/db18.jpg' alt="" />

                                <div className="DwLink">
                                    <span>
                                        <a target='blank' href='https://drive.google.com/file/d/1chwuXHywpVZKarV6CRMW6IdFL5gewaIq/view'>PDF & online program</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.com/dp/1844810186">Amazon.com</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.de/dp/1844810186/">Amazon.de</a>
                                    </span>

                                    <span>
                                        <a target='blank' href="https://www.amazon.co.uk/dp/1844810186">Amazon.co.uk</a>
                                    </span>
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

export default FourthImage