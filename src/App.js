import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Component/Common.css';
import Home from './Component/Home/Home';
import WorkOuts from './Component/WorkOuts/WorkOuts';
import Programs from './Component/Programs/Programs';
import Challenges from './Component/Challenges/Challenges';
import Guides from './Component/Guides/Guides';
import Collections from './Component/Collections/Collections';
import Community from './Component/Community/Community';
import Bookmarks from './Component/Bookmarks/Bookmarks';
import Support from './Component/Support/Support';
import UpdateImage from './Component/Home/InnerHome/UpdateImage';
import SecondImage from './Component/Home/InnerHome/SecondImage';
import ThirdImage from './Component/Home/InnerHome/ThirdImage';
import FourthImage from './Component/Home/InnerHome/FourthImage';
import FourthImageDetails from './Component/Home/InnerHome/FourthImageDetails';
import FIDetails1 from './Component/Home/InnerHome/FIDetails1';
import FIDetails2 from './Component/Home/InnerHome/FIDetails2';
import FIDetails3 from './Component/Home/InnerHome/FIDetails3';
import FIDetails4 from './Component/Home/InnerHome/FIDetails4';
import FIDetails5 from './Component/Home/InnerHome/FIDetails5';
import FIDetails6 from './Component/Home/InnerHome/FIDetails6';
import FIDetails7 from './Component/Home/InnerHome/FIDetails7';
import FIDetails8 from './Component/Home/InnerHome/FIDetails8';
import FIDetails9 from './Component/Home/InnerHome/FIDetails9';
import FIDetails10 from './Component/Home/InnerHome/FIDetails10';
import FIDetails11 from './Component/Home/InnerHome/FIDetails11';
import FIDetails12 from './Component/Home/InnerHome/FIDetails12';
import FIDetails13 from './Component/Home/InnerHome/FIDetails13';
import FifthImage from './Component/Home/InnerHome/FifthImage';
import WorkOutImgDetails from './Component/WorkOuts/InnerWorkOut/WorkOutImgDetails';

function App() {
  return (
    <div className="MainComponentPage">
      <BrowserRouter>
        <Routes>
          {/*Start Home Page Component Details */}
          <Route path='/' element={<Home />} />
          <Route path='/UpdateImage' element={<UpdateImage />} />
          <Route path='/SecondImage' element={<SecondImage />} />
          <Route path='/ThirdImage' element={<ThirdImage />} />
          <Route path='/FourthImage' element={<FourthImage />} />
          <Route path='/FifthImage' element={<FifthImage />} />
          {/* <Route path='/FourthImageDetails/:id' element={<FourthImageDetails />} /> */}
          <Route path='/FIDetails1' element={<FIDetails1 />} />
          <Route path='/FIDetails2' element={<FIDetails2 />} />
          <Route path='/FIDetails3' element={<FIDetails3 />} />
          <Route path='/FIDetails4' element={<FIDetails4 />} />
          <Route path='/FIDetails5' element={<FIDetails5 />} />
          <Route path='/FIDetails6' element={<FIDetails6 />} />
          <Route path='/FIDetails7' element={<FIDetails7 />} />
          <Route path='/FIDetails8' element={<FIDetails8 />} />
          <Route path='/FIDetails9' element={<FIDetails9 />} />
          <Route path='/FIDetails10' element={<FIDetails10 />} />
          <Route path='/FIDetails11' element={<FIDetails11 />} />
          <Route path='/FIDetails12' element={<FIDetails12 />} />
          <Route path='/FIDetails13' element={<FIDetails13 />} />

          {/*End Home Page Component Details */}

          {/*Start WorkOuts Page Component Details */}
          <Route path='/WorkOuts' element={<WorkOuts />} />
          <Route path='/WorkOutImgDetails/:id' element={<WorkOutImgDetails />} />

          {/*End WorkOuts Page Component Details */}

          <Route path='/Programs' element={<Programs />} />
          <Route path='/Challenges' element={<Challenges />} />
          <Route path='/Guides' element={<Guides />} />
          <Route path='/Collections' element={<Collections />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Bookmarks' element={<Bookmarks />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Support' element={<Support />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
