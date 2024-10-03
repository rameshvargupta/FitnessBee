import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer>

        <div className="Footer RespComponent">

          <div className="row">

            <div className="col-sm-6 col-md-6 col-xl-3 col-lg-6">
              <div className="footerDetails SameBg">
                <div className="footerInnerDetails">
                <Link to={'/Support'}>
                  <div className="Image">
                    <img className='img-fluid' src="../../../Images/verylow.gif" alt="image" />
                  </div>
                  </Link>
                  <div className="hr">
                    <hr />
                  </div>

                  <h5>Funding Level</h5>
                  <meter id="disk_c" value="34" min="0" max="100"></meter>
                  <p>What Does This Mean</p>
                </div>
              </div>
            
            </div>

            <div className="col-sm-6 col-md-6 col-xl-3 col-lg-6">
              <div className="footerDetails SameBg">
                <div className="footerLink">
                  <h2>GET STARTED</h2>
                  <p>New to DAREBEE? Start here:</p>
                  <ul>
                    <li><a href="">Introduction</a></li>
                    <li><a href="">Workout Manual</a></li>
                    <li><a href="">Warmup & Stretching</a></li>
                    <li><a href="">How to Pick a Programs</a></li>
                    <li><a href="">Traning Plans</a></li>
                    <li><a href="">Exercise Alternatives</a></li>
                    <li><a href="">Website Functionality</a></li>
                    <li><a href="">Video Exercise Library</a></li>
                    <li><a href="">Help / Ask a Question</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-xl-3 col-lg-6">
              <div className="footerDetails">
                <div className="footerusefulLink">
                  <h2>COOL & USEFUL</h2>
                  <ul>
                    <li><a href="">downloads & paperbacks</a></li>
                    <li><a href="">cool poster</a></li>
                    <li><a href="">cool printables</a></li>
                    <li><a href="">mobile apps</a></li>
                    <li><a href="">certificates & badges </a></li>
                    <li><a href="">calories burned calculator</a></li>
                    <li><a href="">universal timer</a></li>
                    <li><a href="">print a t-shirt</a></li>
                    <li><a href="">site search</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-xl-3 col-lg-6">
              <div className="footerDetails">
                <div className="footerprojectLink">
                  <h2>THE PROJECT</h2>
                  <ul>
                    <li><a href="">about the project</a></li>
                    <li><a href="">how we are supported & why</a></li>
                    <li><a href="">why we have no ads</a></li>
                    <li><a href="">team behind the project</a></li>
                    <li><a href="">The internet of tomororw</a></li>
                    <li><a href="">initiatives & collabaration</a></li>
                    <li><a href="">popular question / ansered</a></li>
                    <li><a href="">copyright & terms of use</a></li>
                    <li><a href="">support the project</a></li>
                  </ul>
                </div>
              </div>
            </div>




          </div>

        </div>

        <div className="RespComponent lastFooter py-4">

          <div className="contactLogo">

            <div className="Image">
              <img src="../../../Images/logo/insta.png" alt="" />
            </div>


            <div className="Image">
              <img src="../../../Images/logo/facebook.png" alt="" />
            </div>


            <div className="Image">
              <img src="../../../Images/logo/youtube.png" alt="" />
            </div>


            <div className="Image lastchild">
              <img src="../../../Images/logo/pinterest.png" alt="" />
            </div>

          </div>

          <div className="linkContact">
            <strong>contact the team</strong>
          </div>
          <div className="ftPara">
            DAREBEE is a non-profit free, ad-free and product placement free global fitness resource. DAREBEE is supported exclusively via <strong>user donations</strong>.
          </div>
          <div className="secPara">
            © 2012 - 2023 DAREBEE | All Rights Reserved. This website uses Cookies. <strong>Disclaimer</strong> & <strong>Privacy Policy</strong>. All of the materials on this website are unique, copyrighted and are exclusive to darebee.com.
          </div>
          <div className="thPara">
            In other languages: <strong>French</strong> | <strong>Greek</strong> | <strong>Russian</strong>
          </div>


        </div >

      </footer>
    </div>
  )
}

export default Footer