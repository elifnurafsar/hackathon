import React from 'react'
import NavbarComp from './components/NavbarComp';
import { Routes, Route, Link } from "react-router-dom";
import ReceiptList from './components/ReceiptList';
import Details from './components/Details';
import receipts from './receipts';

console.log (receipts);
function App() {
  return (
    <div>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={ <ReceiptList props={receipts}/>} />
          <Route path="/details" element={ <Details props={receipts}/>} />
        </Routes>
      </div>
  );
}

export default App;
