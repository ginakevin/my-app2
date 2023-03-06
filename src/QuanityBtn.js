import React, { useState,useContext } from 'react';
import {CartContext} from './CartContext'

function QuanityBtn({productInfo}){

    const {cartItem,setCartItem}=useContext(CartContext);
    
    
    //取得索引,判斷存取購物車是否有被加入資料
    //-1為沒有,0以上為有
    let porductIndexInCart=cartItem.findIndex((element)=>{
        return element.id===productInfo.id;
    });

    let [numIncart,setNumIncart]=useState(
        (porductIndexInCart===-1)?0:cartItem[porductIndexInCart].quantity
    );

    const handleAdd=()=>{
        if(porductIndexInCart===-1){
            console.log(productInfo);
            //目前沒東西
            let firstCartItem=
            {
                "id": productInfo.id,
                "name": productInfo.name,
                "image": productInfo.image,
                "price": productInfo.price,
                "description": productInfo.description,
                 "quantity": 1
            }
            setCartItem([firstCartItem,...cartItem]);
            console.log(cartItem);
            console.log("addd for first");
        }else{
           let newCartItem=[...cartItem];
           newCartItem[porductIndexInCart].quantity++;
           setCartItem(newCartItem);
           console.log(newCartItem);

           console.log("addd for second");
        }
        setNumIncart(numIncart+1);

    };

    const handleSubstract=()=>{
        console.log(porductIndexInCart+"======");
        if(porductIndexInCart!=-1){
            if(cartItem[porductIndexInCart].quantity===1){
                console.log("here");
                let newCartItem_1=[...cartItem];
                //splice才可以完全刪除
                newCartItem_1.splice(porductIndexInCart,1)
                //delete是將原本要刪除的值改為undefined,所以整體長度不變
                // delete newCartItem_1[porductIndexInCart];
                setCartItem(newCartItem_1);
                console.log(cartItem);
            }
            else{
                let newCartItem=[...cartItem];
                newCartItem[porductIndexInCart].quantity--;
                setCartItem(newCartItem);
            }
            setNumIncart(numIncart-1);
            
            console.log(cartItem);
            console.log("cartItem=========substract");
        }else{

        }

        
    }
    
    return(
        <div>
            {console.log(productInfo.name)}
            {
                (numIncart===0)?
                <button onClick={handleAdd}>加入購物車</button>:
                //注意要用div包起來,顯示為一個完整的結構
                <div>
                    <button onClick={handleSubstract}>-</button>
                    <div>{numIncart}件</div>
                    <button onClick={handleAdd}>+</button>
                </div>
                
            }

        </div>
    );
}
export default QuanityBtn;