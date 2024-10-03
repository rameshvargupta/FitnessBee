import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails1 = () => {

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

        {/* styling in common css component */}

        <div className="SelectMainImg pb-5">

          <div className="Image">

            <img className='img-fluid' src="./Images/Home/FIDimg1.jpg" alt="" />

          </div>

          <div className="imagesDetails">
            <p><a target='blank' href="https://drive.google.com/file/d/1LKI4d0zsL4ZyGZnYzWTXrmWdDygdSly1/view">Download</a> | GDrive | High Resolution .PDF | 17Mb</p>
            <p>This collection is complete and it is absolutely free - no strings attached. The project is supported exclusively via donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us support and maintain this resource. All of the workouts from this collection can be found in our <Link to={'/WorkOuts'}>workouts' database.</Link></p>
            <p>A paperback option is available from any local bookstore or from <a target='blank' href="https://www.amazon.com/dp/1844811824/">Amazon.com</a>, <a target='blank' href="https://www.amazon.de/dp/1844811824/">Amazon.de</a> or <a target='blank' href="https://www.amazon.co.uk/dp/1844811824/">Amazon.co.uk</a>. Paperbacks always contain the same information already available for free on this resource. It is also an easy way to introduce someone else to bodyweight training offline. When you buy a paperback you pay for printing and store fees, DAREBEE only makes $1 from each sale. That money goes directly into our development and maintenance fund.</p>
          </div>


        </div>

      </div>


      <div className='mt-3'>
        <Footer />
      </div>

    </div >

  )
}

export default FIDetails1