
import {Routes,  Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import EmployeeList from './Components/EmployeeList';
import OurServices from './Components/OurServices';
import Engines from './Components/Engines';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmp from './Components/AddEmp';
import Footer from './Components/Footer';
import AddEngine from './Components/AddEngine';

function App() {
  return (
    <>
      <Navbar />
        <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emp" element={<EmployeeList />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/add-emp" element={<AddEmp />} />
        <Route path="/edit-emp/:id" element={<AddEmp />}/>
        <Route path="/engines" element={<Engines />} />
        <Route path="/add-eng" element={<AddEngine/>}/>
        <Route path="/edit-eng/:id" element={<AddEngine/>}/>
        </Routes> 
      <Footer/>
      </>
  );
}

export default App;
