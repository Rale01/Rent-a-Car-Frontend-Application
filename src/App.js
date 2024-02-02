import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

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
       
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
