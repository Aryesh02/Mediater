import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path = '/' element={<Home />}></Route>
          <Route path = "/contact" element={<Contact />}></Route>
          <Route path = "*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
