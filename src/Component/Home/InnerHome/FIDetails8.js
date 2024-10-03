import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails8 = () => {

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

            <p>Different workouts, some are more challenging and some are easier than others, will ensure that your muscles don’t get used to the same regime, giving you more in return, and also help you stay active and not get bored with the same routine. Visual workouts are designed to guide you through the routine, as you go from one exercise to the next, in an easier fashion than in a video. Just follow the guides and have fun! You don’t have to work through the entire book; you can pick the workouts you like most or randomly select one and make it a workout of the day.
            </p>



            <div className="linkDetails">

              <p><a target='blank' href=" https://drive.google.com/file/d/1FFYHArsm6idGeY5K1EoR63TXQNMDVK5f/view">Download Volume 1</a> | 100 Workouts | .PDF | 15Mb | GDrive

              </p>

              <p><a target='blank' href="https://drive.google.com/file/d/1hbhvxU7_VulOyZjFNOI7eMOeioVMyDBO/view">Download Volume 2</a> | 100 Workouts | .PDF | 15Mb | GDrive
              </p>

              <p><a target='blank' href="https://drive.google.com/file/d/1S3iHThiNb58K-QHU1Fqd31e1riGibmuD/view">Download Volume 3</a> | 100 Workouts | .PDF | 14Mb | GDrive
              </p>

              <p><a target='blank' href="https://drive.google.com/file/d/16Mm5LOMLvy-sCKktMKEdYPrWLenZys2n/edit">Download Volume 4</a> | 100 Workouts | .PDF | 35Mb | GDrive
              </p>
            </div>

            <p>This collection is complete and it is absolutely free - no strings attached. The project is supported exclusively via donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us support and maintain this resource.</p>

            <h2>Paperback Options</h2>
            <p>Paperback options are available in any local bookstore or online:
            </p>
            
            <div className="linkDetails">

              <p>Volume 1: <a target='blank' href="https://www.amazon.com/gp/product/1844819809">Amazon.com</a> | <a target='blank' href="https://www.amazon.de/gp/product/1844819809">Amazon.de</a> | <a target='blank' href="https://www.amazon.co.uk/gp/product/1844819809">Amazon.co.uk</a></p>

              <p>Volume 2: <a target='blank' href="https://www.amazon.com/gp/product/1844810054">Amazon.com</a> | <a target='blank' href="https://www.amazon.de/gp/product/1844810054">Amazon.de</a> | <a target='blank' href="https://www.amazon.co.uk/gp/product/1844810054">Amazon.co.uk</a></p>

              <p>Volume 3: <a target='blank' href="https://www.amazon.com/gp/product/1844810143">Amazon.com</a> | <a target='blank' href="https://www.amazon.de/gp/product/1844810143">Amazon.de</a> | <a target='blank' href="https://www.amazon.co.uk/gp/product/1844810143">Amazon.co.uk</a></p>

              <p>Volume 4: <a target='blank' href="https://www.amazon.com/gp/product/1844811662">Amazon.com</a> | <a target='blank' href="https://www.amazon.de/gp/product/1844811662">Amazon.de</a> | <a target='blank' href="https://www.amazon.co.uk/gp/product/1844811662">Amazon.co.uk</a></p>
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

export default FIDetails8