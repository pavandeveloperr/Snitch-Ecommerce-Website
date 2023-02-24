import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/Policy';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/privacypolicy' element={<Policy />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
