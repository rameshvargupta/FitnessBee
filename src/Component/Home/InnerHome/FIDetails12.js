import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails12 = () => {

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

            <img className='img-fluid' src="./Images/Home/FIDimg12.jpg" alt="" />

          </div>

          <div className="imagesDetails">

            <p><strong>Fitness is the means through which we hold age at bay.</strong>
            </p>

            <p>Fitness Over 60: Workouts For Every Day is for everyone who wants to enjoy a biological age much lower than their chronological one.</p>

            <p>As we age the body's natural inclination is to give up muscle, slow down and reduce bone density. Unfortunately, this also makes us prone to disease. It reduces our mobility. It degrades our quality of life.</p>

            <p>Bodyweight training makes getting fit easy. No special equipment needed. No fear of injury due to muscle overload. Hardly any space required. Exercise anywhere, any time. No special clothes or shoes necessary. Be as comfortable as you like. Enjoy noticeable fitness gains and a change in how you feel from the very first workout.</p>

            <p>Reclaim your strength, balance, coordination and energy. Transform your body and your life with field-tested workouts that have helped thousands like you. Regain control of your body and your life. Start at any age.</p>

            <p><strong>Learn how to:</strong></p>
            <ul type="square">
              <li>Work out every day, at your level and pace</li>
              <li>Pick a workout that fits your mood and inclination</li>
              <li>Work on different physical attributes each time you exercise</li>
              <li>Feel younger, stronger, healthier and more capable than ever before</li>
              <li>Combat boredom and lack of inspiration with our complete workouts</li>
            </ul>

            <p><a target='blank' href="https://drive.google.com/file/d/1XVhegln28CsOo6aMbiKqbOHd5bl4scqE/view">Download</a> | .PDF | 11Mb | GDrive
            </p>


            <p>This collection is complete and it is absolutely free - no strings attached. The project is supported exclusively via donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us support and maintain this resource.</p>

            <div className="linkDetails">
              <h2>Paperback Options</h2>
              <p>Paperback options are available in any local bookstore or online:
              </p>

              <p><a target='blank' href="https://www.amazon.com/dp/1844811700/">Amazon.com</a></p>

              <p><a target='blank' href="https://www.amazon.de/dp/1844811700/">Amazon.de</a></p>

              <p><a target='blank' href="https://www.amazon.co.uk/dp/1844811700/">Amazon.co.uk</a></p>

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

export default FIDetails12