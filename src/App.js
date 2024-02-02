import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RentalAgents from './components/rentalagents/RentalAgents';

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
       
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
