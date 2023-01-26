
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Terms from './pages/terms/Terms';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
