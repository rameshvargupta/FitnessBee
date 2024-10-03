import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails10 = () => {

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

            <img className='img-fluid' src="./Images/Home/FIDimg7.jpg" alt="" />

          </div>

          <div className="imagesDetails">

            <p>Physical Education is the foundation on which healthy bodies and sound minds are built. Physical Education teachers and their students now have a great help in the P.E. Workbook: 100 Visual Workouts.
            </p>

            <p>Its 100 no-equipment, P.E.-friendly, visual workouts take the guesswork out of how each workout should be done. This helps P.E. teachers and their students focus on how to get the most out of each class. Because they require very little space, the 100 visual workouts in this P.E. workbook, are perfect for remote teaching of Physical Education classes as well for in-person learning.</p>

            <ul type="square">
              <li>No special equipment needed</li>
              <li>Works the same remotely and in-person</li>
              <li>Workouts for virtually every level of fitness</li>
              <li>Easy-to-follow, fully illustrated steps for an amazing P.E. lesson</li>
            </ul>

            <p>DAREBEE's mission is to make health and fitness accessible to everyone. Many people's fitness journey starts at school with Physical Education classes.</p>

            <p>The P.E. Workbook: 100 Visual Workouts makes it easy to produce great, engaging and effective P.E. lessons under virtually any conditions and circumstances.</p>




            <p><a target='blank' href="https://drive.google.com/file/d/1CRbuBXi7qJEGlict33wG6CHn6A9nF8ZA/view">Download</a> | PE Workbook | .PDF | 33Mb | GDrive
            </p>


            <p>This collection is complete and it is absolutely free - no strings attached. The project is supported exclusively via donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us support and maintain this resource.</p>

            <div className="linkDetails">
               <h2>Paperback Options</h2>
              <p>Paperback options are available in any local bookstore or online:
              </p>

              <p><a target='blank' href="https://www.amazon.com/dp/1844811654/">Amazon.com</a></p>

              <p><a target='blank' href="https://www.amazon.de/dp/1844811654/">Amazon.de</a></p>

              <p><a target='blank' href="https://www.amazon.co.uk/dp/1844811654/">Amazon.co.uk</a></p>

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

export default FIDetails10