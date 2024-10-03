import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './WorkOuts.css';
import Footer from '../Footer/Footer';
import WorkOutImgData from './WorkOutImgData';
const WorkOuts = () => {

  function openNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "270px";
  }

  function closeNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "0";
  }
  const [showBtnImg, setShowBtnImg] = useState("1");
  const [className, setClassName] = useState(false);

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
              <li><Link className='active' to={'/WorkOuts'}>WORKOUTS</Link></li>
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
              <li><Link className='active' to={'/WorkOuts'}>WORKOUTS</Link></li>
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
          <p><strong>2200+ workouts in the database.</strong> <span>LOAD FILTER</span></p>
          <p>New workouts added Monday to Thursday. Latest In:</p>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "1" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id <= 20) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "2" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 21 && item.id <= 40) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "3" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 41 && item.id <= 60) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "4" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 61 && item.id <= 80) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "5" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 81 && item.id <= 100) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "6" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 101 && item.id <= 120) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "7" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 121 && item.id <= 140) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "8" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 141 && item.id <= 160) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "9" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 161 && item.id <= 180) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="WorkOutsImage mb-3" style={{ display: showBtnImg === "10" ? "block" : "none" }}>
          <div className="row">
            {WorkOutImgData.map((item) => {
              if (item.id >= 181 && item.id <= 200) {
                const { id, sImage } = item
                return (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <div className="Image">
                        <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>


        <div className="numberOfPage py-4">
          <div className={`page ${showBtnImg === "1" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("1")}>1</div>
          <div className={`page ${showBtnImg === "2" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("2")}>2</div>
          <div className={`page ${showBtnImg === "3" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("3")}>3</div>
          <div className={`page ${showBtnImg === "4" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("4")}>4</div>
          <div className={`page ${showBtnImg === "5" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("5")}>5</div>
          <div className={`page ${showBtnImg === "6" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("6")}>6</div>
          <div className={`page ${showBtnImg === "7" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("7")}>7</div>
          <div className={`page ${showBtnImg === "8" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("8")}>8</div>
          <div className={`page ${showBtnImg === "9" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("9")}>9</div>
          <div className={`page ${showBtnImg === "10" ? 'activePage' : ''}`} onClick={() => setShowBtnImg("10")}>10</div>
        </div>

      </div>

      <div>
        <Footer />
      </div>


    </div>
  )
}

export default WorkOuts


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './WorkOuts.css';
// import Footer from '../Footer/Footer';
// import WorkOutImgData from './WorkOutImgData';

// const WorkOuts = () => {
//   const [showBtnImg, setShowBtnImg] = useState("1");

//   function toggleNav(width) {
//     document.getElementById("mySidenav").style.width = width;
//   }

//   return (
//     <div onClick={() => toggleNav("0")}>

      

//       <div className="Navbar RespComponent">
//         <div className=" MenuBar">
//           <div className=" MainLogo">
//             <div className="smallcart" onClick={() => toggleNav("270")}>
//               <i className="fa-solid fa-bars"></i>
//             </div>
//             <Link to={'/'}>
//               <div className="logo">
//                 <img src="./Images/MainLogo.png" alt="" />
//               </div>
//             </Link>
//           </div>

//           <div className="MenuDetails">
//             <div className="BigMenu">
//               {['WorkOuts', 'Programs', 'Challenges', 'Guides', 'Collections', 'Community', 'Bookmarks', 'Support'].map((item, index) => (
//                 <li key={index}><Link className={showBtnImg === `${index+1}` ? 'active' : ''} to={`/${item}`}>{item.toUpperCase()}</Link></li>
//               ))}
//             </div>

//             <div id="mySidenav" className="MobileMenu" onClick={() => toggleNav("0")}>
//               <button className="openbtn" onClick={() => toggleNav("0")}>X</button>
//               {['WorkOuts', 'Programs', 'Challenges', 'Guides', 'Collections', 'Community', 'Bookmarks', 'Support'].map((item, index) => (
//                 <li key={index}><Link className={showBtnImg === `${index + 1}` ? 'active' : ''} to={`/${item}`}>{item.toUpperCase()}</Link></li>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="MainComponent RespComponent">
//         <div className="topWDetails">
//           <p><strong>2200+ workouts in the database.</strong> <span>LOAD FILTER</span></p>
//           <p>New workouts added Monday to Thursday. Latest In:</p>
//         </div>

//         {[...Array(10).keys()].map((page) => (
//           <div key={page} className={`WorkOutsImage mb-3`} style={{ display: showBtnImg === `${page + 1}` ? "block" : "none" }}>
//             <div className="row">
//               {WorkOutImgData.map((item) => {
//                 if (item.id >= page * 20 + 1 && item.id <= page * 20 + 20) {
//                   const { id, sImage } = item;
//                   return (
//                     <div key={id} className="col-sm-6 col-md-4 col-lg-3 ">
//                       <div className="Image">
//                         <Link to={`/WorkOutImgDetails/${id}`}> <img className='img-fluid' src={sImage} alt="" /></Link>
//                       </div>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           </div>
//         ))}

//         <div className="numberOfPage py-4">
//           {[...Array(10).keys()].map((page) => (
//             <div key={page} className={`page ${showBtnImg === `${page + 1}` ? 'activePage' : ''}`} onClick={() => setShowBtnImg(`${page + 1}`)}>{page+1}</div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default WorkOuts;
