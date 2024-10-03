import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';

const Collections = () => {

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

        <div className=" MenuBar">

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
              <li><Link className='active' to={'/Collections'}>COLLECTIONS</Link></li>
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
              <li><Link className='active' to={'/Collections'}>COLLECTIONS</Link></li>
              <li><Link to={'/Community'}>COMMUNITY</Link></li>
              <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
              <li><Link to={'/Support'}>SUPPORT</Link></li>
            </div>


          </div>

        </div>
      </div>

      <div className="MainComponent RespComponent">

        <div className="topWDetails">
          <p>New collection added every Friday! Latest in:</p>
        </div>

        <div className="WorkOutsImage mb-3">
          <div className="row">

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/1.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/2.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/3.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/4.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/5.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/6.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/7.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/8.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Collections/9.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/10.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/11.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/12.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/13.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/14.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/15.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/16.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/17.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/18.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/19.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/20.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Collections/21.jpg" alt="" />
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
          <div className="page">9</div>
          <div className="page">10</div>
        </div>

      </div>

      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Collections
