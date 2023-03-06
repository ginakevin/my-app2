import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import React,{useState} from 'react';
// import './App.css';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import ProductList from './ProductList';
import {CartContext,GetHttpProductlist} from './CartContext'


function App() {

  const [cartItem,setCartItem]=useState([]);
  const [getHttpProductlistContext,setGetHttpProductlistContext]=useState([]);

  return (
    <div>
      {console.log("*******************App start*******************")}
     <BrowserRouter>

        <CartContext.Provider value={{cartItem,setCartItem}}>
          <GetHttpProductlist.Provider value={{getHttpProductlistContext,setGetHttpProductlistContext}}>
            {/* <Link to="/">首頁</Link><br/>
            <Link to="/ProductDetail">產品細項</Link><br/> */
            <Link to="/Checkout">購物車</Link>}
          <Routes>
              <Route path="/" element={<ProductList/>}></Route>
              <Route path="/ProductDetail" element={<ProductDetail/>}>
                <Route path=":id" element={<ProductDetail/>}></Route>
              </Route>
              <Route path="/Checkout" element={<Checkout/>}></Route>
              {/**
                  path 裡面寫*號表示任一路徑(包含不在目前目錄下的路徑)
                  element 代表導向的內容
              */}
              <Route path="*" element={<p>網頁找不到</p>}></Route>
          </Routes>
          </GetHttpProductlist.Provider>
        </CartContext.Provider>
     </BrowserRouter>
      {console.log("*******************App end*******************")}
    </div>
  );
}
//function 用默認導出的改念
export default App;
