import React,{useContext} from 'react';
import Title from "./Title";
import {Link} from "react-router-dom";
import QuanityBtn from './QuanityBtn';
import {CartContext} from './CartContext'

function Checkout(){
    let {cartItem}=useContext(CartContext);
    // {
    //     "cartItems": 
    //     [
    //         {
    //             "image": "blueberry.jpg",
    //             "price": 10,
    //             "description": "新鮮藍梅50克，補眼之寶",
    //             "quantity": 3
    //         },
    //         {
    //             "id": 4,
    //             "name": "西瓜",
    //             "image": "watermelon.jpg",
    //             "price": 20,
    //             "description": "新鮮西瓜2公斤，夏季必備",
    //             "quantity": 1
    //         }
    //     ]
    // }
    console.log(cartItem+"===fffffff===");
    let CheckCartItemBoolean= cartItem.length<=0 ? false:true;
    console.log(CheckCartItemBoolean+"======");

    let grandTotal =cartItem.reduce((result,currentVal) =>{
        return result+=currentVal.price*currentVal.quantity
    }
    ,0)
    const freeShippingPrice = 99

    return(
        <div>
            <Title mainTitle="結帳"></Title>
            {
                !CheckCartItemBoolean &&
                <div>
                    <Link to='/' >返回首頁</Link>
                </div>
            }
            {
                CheckCartItemBoolean &&
                <div>
                    <div id="cartSection">
                        {
                          cartItem.map((jsonItems)=>
                            <div key={jsonItems.id}>
                                <img src={"/img/"+jsonItems.image}></img>
                                {jsonItems.name}
                                {jsonItems.description}
                                {jsonItems.price}
                                購買數量{jsonItems.quantity} 
                               
                            </div>
                          )
                        }
                    </div>
                    <div id="checkOutSection">
                    {
                        grandTotal>=freeShippingPrice?
                        <div>我們免費送貨</div> :
                        <div>滿${freeShippingPrice}免費送貨<br/>
                        還差${freeShippingPrice-grandTotal}</div>
                    }
                    </div>
                 </div>
            }
            <Link to='/' >返回首頁</Link>
        </div>
    );
}
export default Checkout;