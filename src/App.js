
import './App.css';
import NavbarPage from './Navbar';
import CrudApp from './CrudApp';

import React, { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PriceChart from './PriceChart/PriceChart';
import AddUser from './Crud/AddUser';
import EditUser from './Crud/EditUser';
import Home from './Home'
import Footer from './Footer';

function App() {
  return (
    <Router>
      <NavbarPage />
      <Routes>
        <Route path="/crudapp" element={<CrudApp />} exact></Route>
        <Route path="/pricechart" element={<PriceChart />} exact></Route>
        <Route path='/user/add' element={<AddUser/>} exact></Route>
        <Route path='/user/edit/:id' element={<EditUser/>} exact></Route>
        <Route path='/' element={<Home/>} exact></Route>
    </Routes>
    <Footer/>
          </Router >
        );
}

export default App;
