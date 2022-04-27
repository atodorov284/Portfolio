import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/Home/index'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path = "/" element ={<Sidebar />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
