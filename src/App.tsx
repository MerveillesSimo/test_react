import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Form from './component/Form';
import './App.css';



const App: React.FC = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/form" element={<Form />} /> */}
    </Routes>
  );
};


export default App;
