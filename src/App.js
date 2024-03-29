import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RentalAgents from './components/rentalagents/RentalAgents';
import Cars from './components/cars/Cars';
import CarDetails from './components/cars/CarDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route 
          path="/agents" 
          element={<RentalAgents/>} 
        />
         <Route 
          path="/cars/:id" 
          element={<CarDetails/>} 
        />
        <Route 
          path="/cars" 
          element={<Cars/>} 
        />
       
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
