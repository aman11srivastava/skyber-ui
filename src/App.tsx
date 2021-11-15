import React from 'react';
import './App.css';
import Header from "./components/Header";
import OrderStatus from "./components/OrderStatus";
import GridSection from "./components/GridSection";

function App() {
  return (
      <div>
          <Header/>
          <OrderStatus/>
          <GridSection/>
      </div>
  );
}

export default App;
