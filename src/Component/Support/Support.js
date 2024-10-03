import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import './Support.css'

const Support = () => {

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
              <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
              <li><Link to={'/Community'}>COMMUNITY</Link></li>
              <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
              <li><Link className='activeSupport' to={'/Support'}>SUPPORT</Link></li>
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
              <li><Link className='activeSupport' to={'/Support'}>SUPPORT</Link></li>
            </div>


          </div>

        </div>
      </div>

      <div className="MainComponent RespComponent">

        <div className="supportPage">

          <div className="SupportDetails">
            <h2 style={{ textAlign: "center", padding: "10px" }}>Support the Project</h2>
            <p className='my-4'>We are supported exclusively via user donations and every dollar makes a difference. We have no sponsors and we, sadly, did not discover the cheatcode for more gold. User donations are this project's only lifeline and what keeps it going. Whatever you feel comfortable giving will be greatly appreciated and it will make a difference in this project’s future.</p>

            <p>You can find out more about DAREBEE finances, how we are supported - and why, <strong style={{ color: "red" }}>here</strong>.</p>

          </div>


          <div className="paymentDetails">
            <h2 style={{ textAlign: "center", padding: "10px" }}>Option 1: Donate via PayPal</h2>
            <p>All types of cards. Debit cards, credit cards or PayPal account.
              Single or monthly donations.</p>


            <div className="donateImage">

              <div className="InnerImage">

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/give-1.jpg" alt="" />
                </div>

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/give-5.jpg" alt="" />
                </div>

              </div>

              <div className="InnerImage">

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/give-10.jpg" alt="" />
                </div>

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/different.jpg" alt="" />
                </div>

              </div>

            </div>


          </div>

          <div className="paymentDetails mt-4">
            <h2 style={{ textAlign: "center", padding: "10px" }}>Option 2: Donate Via Donorbox</h2>
            <p>All types of cards. Debit cards, credit cards or PayPal account.
              Single or monthly donations.</p>

            <div className="donateImage">

              <div className="InnerImage">

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/dbox.jpg" alt="" />
                </div>

              </div>

            </div>

          </div>

          <div className="paymentDetails mt-4">
            <h2 style={{ textAlign: "center", padding: "10px" }}>Option 3: Bank Transfer</h2>

            <div className="bankingDetails">
              <h3>Us Dollar</h3>
              <div>Account Holder: Darebee</div>
              <div>Account number: 8310140100</div>
              <div>Wire Routing Number: 026073008</div>
              <div>ACH Routing Number: 026073150</div>
            </div>

            <div className="bankingDetails my-4">
              <div><i>Address</i></div>
              <div>TransferWise</div>
              <div>19 W 24th Street</div>
              <div>New York, 10010</div>
              <div>United States</div>

            </div>

            <hr />

            {/* Second banking Details */}


            <div className="bankingDetails">
              <h3>Euro</h3>
              <div>Account Holder: Darebee</div>
              <div>Bank code (SWIFT / BIC): TRWIBEB1XXX</div>
              <div>IBAN: BE66 9670 2309 3743</div>
            </div>

            <div className="bankingDetails my-4">
              <div><i>Address</i></div>
              <div>TransferWise Europe SA</div>
              <div>Avenue Marnix 13-17</div>
              <div>Brussels</div>
              <div>1000</div>
              <div>Belgium</div>

            </div>

            <hr />

            {/* Third banking Details */}


            <div className="bankingDetails">
              <h3>British Pound</h3>
              <div>Account Holder: Darebee</div>
              <div>UK Sort Code: 23-14-70</div>
              <div>Account number: 42306987</div>
              <div>IBAN: GB30 TRWI 2314 7042 3069 87</div>
            </div>

            <div className="bankingDetails my-4">
              <div><i>Address</i></div>
              <div>TransferWise</div>
              <div>56 Shoreditch High Street</div>
              <div>London</div>
              <div>E1 6JJ</div>
              <div>United Kingdom</div>

            </div>

            <hr />

          </div>

          <div className="paymentDetails pb-4 mb-4">
            <h2 style={{ textAlign: "center", padding: "10px" }}>Option 4: Crypto Donation</h2>

            <div className="donateImage">

              <div className="CryptoImage">

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/bitcoin.jpg" alt="" />
                </div>

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/bitcoincash.jpg" alt="" />
                </div>

              </div>

              <div className="CryptoImage">

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/ether.jpg" alt="" />
                </div>

                <div className="Image">
                  <img className='img-fluid' src="./Images/Support/dogecoin.jpg" alt="" />
                </div>

              </div>

            </div>


          </div>

        </div>


      </div>


      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Support
