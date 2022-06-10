import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import ProjectOne from './Components/ProjectDetails.js/ProjectOne';
import ProjectTwo from './Components/ProjectDetails.js/ProjectTwo';
import ProjectThree from './Components/ProjectDetails.js/ProjectThree';
import Blog from './Components/Home/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project-1' element={<ProjectOne></ProjectOne>}></Route>
        <Route path='/project-2' element={<ProjectTwo></ProjectTwo>}></Route>
        <Route path='/project-3' element={<ProjectThree></ProjectThree>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
