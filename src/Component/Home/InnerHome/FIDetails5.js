import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails5 = () => {

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

            <img className='img-fluid' src="./Images/Home/FIDimg5.jpg" alt="" />

          </div>

          <div className="imagesDetails">

            <p> <strong><i>Abs: 100 Workouts</i></strong> is the ultimate compilation of workouts all specifically designed for building, defining and revealing abs. As the title suggests, there are 100 workouts in this collection and they are split into two categories: Build and Burn & Build to help you choose the workouts more suited for your current body composition.
            </p>

            <p>If you have high body fat (e.g., you have a bit of a stomach) you should pick 3-4 workouts per week from the "Burn & Build" section. If your body fat is already low or you are doing other forms of high burn exercise outside of this collection (e.g., running, swimming, martial arts) you should pick 3 workouts per week from "Build" section.</p>

            <p>Most routines in this collection are no-equipment based but you will also find Swiss ball, dumbbells and pull-up bar workouts in there as well.</p>

            <p>In addition, you will find an ab diet included to help you manage your nutrition or to simply give you an idea of what your food intake should look like in order to get faster and better results.</p>

            <p>All workouts have been developed by DAREBEE over the course of several years, they've all been thoroughly tested and they are all suitable for both men and women. No age restrictions apply.</p>



            <p><a target='blank' href="https://drive.google.com/file/d/1rHqX8OXF4yuAZtv2_a_FPs4yuor_oA3v/view">Download | 100 Workouts | GDrive | High Resolution .PDF | 13Mb </a>

            </p>

            <p><strong>This collection is complete and it is absolutely free - no strings attached.</strong> The project is supported exclusively via user donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us maintain this resource and develop it further. Every donation helps DAREBEE to stay up and continue to contribute to the quality of experience on the web</p>

            <p>A paperback option (large A4 format) is available from any local bookstore or from <a target='blank' href="https://www.amazon.com/ABS-100-Workouts-Easy-Follow/dp/1844810097">Amazon</a>. Paperbacks always contain the same information already available for free on this resource. When you buy a paperback you pay for printing and store fees, DAREBEE only makes $1 from each sale. That money goes directly into our development and maintenance fund.</p>
          </div>


        </div>

      </div>


      <div className='mt-3'>
        <Footer />
      </div>

    </div >

  )
}

export default FIDetails5