import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Dispcard from './Dispcard';
import Foodmenu from './Foodmenu';
import Homepage from './homepage/Homepage';
import { Routes, Route, Link } from 'react-router-dom';
import Foodinfopage from './foodInfoPage/Foodinfopage';
import Showrecipepage from './Showrecipepage/Showrecipepage.jsx';
import Landingpage from './LandingPage/Landingpage.jsx';
function App() {
  return (
   <>      
    <Routes>        
        {/* <Route path="/" element={<Navbar></Navbar>}/> */}
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/foodInfo" element={<Foodinfopage />} />
        <Route path='/findRecipe/*' element={<Showrecipepage/>}/>
    </Routes>
   </>
  );
}

export default App;
