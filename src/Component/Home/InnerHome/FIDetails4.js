import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import '../Home.css';



const FIDetails4 = () => {

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

            <img className='img-fluid' src="./Images/Home/FIDimg4.jpg" alt="" />

          </div>

          <div className="imagesDetails">

            <p>Build your fitness level on your terms. Exercise science shows you don't have to exhaust yourself with hours of daily, heavy exercise in order to trigger the cellular adaptation responses that make you get stronger and feel healthier. What you do need is consistency in your workouts, exercises you can perform at any level of fitness and fitness routines that are actually fun to do. The 200 Easy Workouts are specially formulated to help you build your fitness level the moment you start doing them.
            </p>

            <p>Easy-to-follow visual workouts on every page allow you to find the perfect workout to fit your situation and mood.</p>

            <p>The 200 Easy Workouts are specially formulated to be accessible and fun.</p>



            <p><strong>Learn how to:</strong></p>

            <ul type="Square">
              <li>No more worrying about finding time to exercise (do it any time you want).
              </li>
              <li>No more worrying about gym clothes (exercise in your underwear).</li>
              <li>No more gym memberships (save your money for other things).</li>
              <li>Feel younger, stronger, healthier and more capable than ever before</li>
              <li>And no more worrying about equipment or space (you need zero of the first and remarkably little of the second).</li>
              <li>No more feeling exhausted after exercise (find your level and adjust your workouts at your pace).</li>
              <li>No more having to change your life to get fit (pick workouts to suit your mood and inclination).</li>
              <li>Exercise even when watching TV (specially designed sofa workouts and workouts for tendons and neck make it easy to do so).</li>
              <li>Progress when you are ready, not before (you have total control. Pick the workout you want. Advance at your own pace).</li>
            </ul>

            <p>Your body is where you live. The Darebee 200 Easy Workouts let you find your own way to making it the best version possible, for you, completely on your terms.</p>

            <p><a target='blank' href="https://drive.google.com/file/d/1oQXaqWpg7IGJQPpLN80Cjo01O1A1-8I-/view">Download</a> | .PDF | 23MB | GDrive</p>

            <p>This collection is complete and it is absolutely free - no strings attached. The project is supported exclusively via donations, we have no sponsors or ads on this website. If you like this collection, please consider <Link to={'/Support'}>donating a dollar</Link> to help us support and maintain this resource. All of the workouts from this collection can be found in our <Link to={'/WorkOuts'}>workouts' database.</Link></p>

            <p>A paperback option is available from any local bookstore or from <a target='blank' href="https://www.amazon.com/dp/1844811735/">Amazon.com</a>, <a target='blank' href="https://www.amazon.de/dp/1844811735/">Amazon.de</a> or <a target='blank' href="https://www.amazon.co.uk/dp/1844811735/">Amazon.co.uk</a>. Paperbacks always contain the same information already available for free on this resource. It is also an easy way to introduce someone else to bodyweight training offline. When you buy a paperback you pay for printing and store fees, DAREBEE only makes $1 from each sale. That money goes directly into our development and maintenance fund.</p>
          </div>


        </div>

      </div>


      <div className='mt-3'>
        <Footer />
      </div>

    </div >

  )
}

export default FIDetails4