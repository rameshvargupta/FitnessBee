import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import ProgramData from './ProgramData';

const Programs = () => {

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
              <li><Link className='active' to={'/Programs'}>PROGRAMS</Link></li>
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

        <div className="topWDetails">
          <p><strong>70+ programs in the database.</strong> <span>LOAD FILTER</span></p>
          <p>A new program added every two months!</p>
        </div>

        <div className="WorkOutsImage mb-3">
          {/* <div className="row">

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/1.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/2.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/3.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/4.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/5.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/6.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/7.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/8.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Ringbearer'>
                <img className='img-fluid' src="./Images/Program/9.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/10.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/11.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/12.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/13.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/14.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/15.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/16.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/17.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/18.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/19.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="Image" title='Barre Strength Workout'>
                <img className='img-fluid' src="./Images/Program/20.jpg" alt="" />
              </div>
            </div>





          </div> */}

          <div className="row">
            {ProgramData.map((item, index) => (
            
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 ">
                <div className="Image" title='Ringbearer'>
                  <img className='img-fluid' src={item.sImage} alt="" />
                </div>
              </div>

            ))}
          </div>
        </div>

        <div className="numberOfPage py-4">
          <div className="page activePage">1</div>
          <div className="page">2</div>
          <div className="page">3</div>
          <div className="page">4</div>

        </div>

      </div>

      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Programs