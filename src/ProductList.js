import React, { useState, useEffect,useContext } from 'react';
import ProductStyles from './ProductList.module.css';
import {Link} from "react-router-dom";
import Title from "./Title";
import QuanityBtn from './QuanityBtn';
import {GetHttpProductlist} from './CartContext'

function ProductList(){
    const {getHttpProductlistContext,setGetHttpProductlistContext}=useContext(GetHttpProductlist);
    console.log("re-render from here");
    let [productlist,setProductList]=useState([]);
    // let productlist=[
        // {"id":1,"name":"Apple","price":5,"image":"apple.jpg","description":"An apple a day ,keep doctor away"},
        // {"id":2,"name":"Orange","price":4,"image":"blueberry.jpg","description":"Orange's color is orange"},
        // {"id":3,"name":"Mango","price":6,"image":"mango.jpg","description":"Mango is taste good"},
        // {"id":4,"name":"Watermelon","price":8,"image":"orange.jpg","description":"a lot of water"},
        // {"id":5,"name":"blueberry","price":7,"image":"watermelon.jpg","description":"very sour"},
        // {"id":6,"name":"Guava","price":9,"image":"white-carrot.jpg","description":"The vitamin c is the highiest"}
    // ];
    let countTest=0;
    //每次當使用 setShowProduct去改變數值時,都會觸發重新 re-render
    const [showProduct,setShowProduct]=useState(true);
/**
 * // useEffect可以有2個參數
useEffect(()=>{
    //有以下2種情況
    //1.無第二參數, component 每次render 都會被觸發
    //2.第二參數是空Array時,只會在網頁第一次render時被觸發
    //3.有第二參數,在網頁第一次render時被觸發,還有指定變數改變時會觸發
},[]);
 */ 
    // const consoleTest=()=>{
    //     console.log(countTest);
    //     console.log("-----------------------end------------------------"+countTest);
    //     countTest++;
    //     console.log(countTest);
    // }

    
    useEffect(() => {
        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發

        //第二個參數是一個數組，用來指定在哪些依賴變量更新時才執行回調函數。
        //如果這個數組為空，那麼回調函數只會在組件掛載時執行一次，而不會在更新時再次執行。
        const options = {
            method: 'POST'
            // headers: {
            //   'Content-Type': 'application/json'
            // }
        };
      
      fetch('http://demo.tsmc-ai.com:3009/products/all', options)
        .then(response => response.json())
        .then(data =>{
            // console.error(data);
            setProductList(data);
            setGetHttpProductlistContext(data);
        })
        .catch(error => console.error(error));

    },[])// <==  Dependency Array

    return(
        <div>
            {/* {console.log("start")}
            {!showProduct && <button onClick={()=>setShowProduct(true)}>顯示圖示</button>}
            {showProduct && <button onClick={()=>setShowProduct(false)}>隱藏圖示</button>} */}
            
            {//"mainTitle"是props就是可以在不同component中傳遞參數,傳遞的值也可以是一個function
            }
            <Title mainTitle="請選擇要購買的產品"></Title>
            <div>
            {
                //第一種寫法
                showProduct && productlist.map((product)=>{
                   return (
                       <div className={ProductStyles.productBorder} key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <Link to={'/ProductDetail/'+product.id}>
                                <img src={"/img/"+product.image} alt={product.id}></img>
                            </Link>
                           
                            <p>{product.description}</p>
                            <QuanityBtn productInfo={product}></QuanityBtn>
                       </div>
                       
                   ); 
                })
                //第二種寫法
                // productlist.map(product=>(
                //        <p>{product.name}</p>
                //     ))
                
            }
            </div>
            {/* {consoleTest()} */}
        </div>
    );
}
export default ProductList;
