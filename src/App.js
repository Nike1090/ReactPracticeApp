import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Jobs from './App/Jobs/Jobs';
import AboutUs from './App/About-Us/About-Us';
import Home from './App/Home/Home';
import Contact from './App/Contact/Contact';
import { Login } from './App/Login/Login';
import Error from './App/Pages/Error';

function App() {
  

  return (
    <BrowserRouter>
      <div className="navvy">
        <nav>
          <Link to='/home' > HOME</Link>
          <Link to='/About'> ABOUT-US</Link>  
          <Link to='/Jobs'> JOBS</Link> 
          <Link to='/Contacts'>  CONTACT</Link> 
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<AboutUs />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Contacts" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
