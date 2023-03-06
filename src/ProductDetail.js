import React, { useContext }  from 'react';
import {useParams,Link} from "react-router-dom";
import Title from "./Title";
import QuanityBtn from './QuanityBtn';
import {GetHttpProductlist} from './CartContext'

function ProductDetail(){
    const {getHttpProductlistContext}=useContext(GetHttpProductlist);
    let params=useParams();

    const length = Object.keys(getHttpProductlistContext).length;
    let getDetail={};
    console.log(length)
    if(length>0){
        getHttpProductlistContext.map((element)=>{
            console.log(typeof element.id+"===="+typeof  params.id)
            if(element.id===parseInt(params.id)){
                getDetail={...element};
                console.log(getDetail)
            }else{
                // console.log("no data")
            }
            
        })  
    }
    return(
        <div>
           <Title mainTitle={params.id+"產品名稱"}></Title>
           {          
                <div>
                    <p>{getDetail.name}</p>
                    <p>{getDetail.price}</p>
                    <img src={"/img/"+getDetail.image} alt={getDetail.id}></img>
                    <p>{getDetail.description}</p>
                    <QuanityBtn productInfo={getDetail}></QuanityBtn>
                </div>          
           }
           <Link to='/' >返回首頁</Link>
           
        </div>
    );
}
export default ProductDetail;