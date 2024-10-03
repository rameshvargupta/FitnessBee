// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Footer from '../../Footer/Footer';
// import '../Home.css';
// import DBookData from './DBookData';

// const FourthImageDetails = () => {

//     const [myBook, setMyBook] = useState({})
//     const { id } = useParams();

//     useEffect(() => {
//         let data = DBookData.filter((item) => item.id == id)
//         setMyBook(data[0])
//     }, [])

//     function openNav(e) {
//         e.stopPropagation();
//         document.getElementById("mySidenav").style.width = "270px";
//     }

//     function closeNav(e) {
//         e.stopPropagation();
//         document.getElementById("mySidenav").style.width = "0";
//     }


//     return (
//         <div onClick={closeNav}>

//             <div className="Navbar RespComponent">

//                 <div className="MenuBar">

//                     <div className=" MainLogo">

//                         <div className="smallcart" onClick={openNav}>
//                             <i class="fa-solid fa-bars"></i>
//                         </div>

//                         <Link to={'/'} >
//                             <div className="logo">
//                                 <img src="./Images/MainLogo.png" alt="" />
//                             </div>
//                         </Link>

//                     </div>

//                     <div className="MenuDetails">

//                         <div className="BigMenu">
//                             <li><Link to={'/WorkOuts'}>WORKOUTS</Link></li>
//                             <li><Link to={'/Programs'}>PROGRAMS</Link></li>
//                             <li><Link to={'/Challenges'}>CHALLENGES</Link></li>
//                             <li><Link to={'/Guides'}>GUIDES</Link></li>
//                             <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
//                             <li><Link to={'/Community'}>COMMUNITY</Link></li>
//                             <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
//                             <li><Link to={'/Support'} className='highlight'>SUPPORT</Link></li>
//                         </div>



//                         <div id="mySidenav" class="MobileMenu" onClick={openNav}>
//                             <button class="openbtn" onClick={closeNav}>X</button>
//                             <li><Link to={'/WorkOuts'}>WORKOUTS</Link></li>
//                             <li><Link to={'/Programs'}>PROGRAMS</Link></li>
//                             <li><Link to={'/Challenges'}>CHALLENGES</Link></li>
//                             <li><Link to={'/Guides'}>GUIDES</Link></li>
//                             <li><Link to={'/Collections'}>COLLECTIONS</Link></li>
//                             <li><Link to={'/Community'}>COMMUNITY</Link></li>
//                             <li><Link to={'/Bookmarks'}>BOOKMARKS</Link></li>
//                             <li><Link to={'/Support'}>SUPPORT</Link></li>
//                         </div>


//                     </div>

//                 </div>
//             </div>

//             <div className="MainComponent RespComponent">
//                 <div>
//                     <img src={myBook.image} />
//                     <h2>{myBook.downloaddetails}</h2>
//                     <p>{myBook.fitnessDesc}</p>
//                     <p>{myBook.fitnessDesc2}</p>
//                     <p></p>
//                 </div>

//             </div>



//             <div className='mt-3'>
//                 <Footer />
//             </div>

//         </div >

//     )
// }

// export default FourthImageDetails