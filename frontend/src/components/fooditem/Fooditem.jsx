import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext';
const Fooditem = ({id,name,price,description,image}) => {

    

 const{cartitem,addtocart,removefromCart,url}=useContext(Storecontext);


  return (
    <div className='fooditem'>
      <div className="fooditemimagecontainer">
        <img className='fooditemimage' src={url+"/images/"+image}   alt="" />
        {
          !cartitem[id]
          ?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} />
          :<div className='Fooditemcounter'>
              <img   onClick={()=>removefromCart(id)}  src={assets.remove_icon_red} />
              <p>{cartitem[id]}</p>
             <img onClick={()=>addtocart(id)} src={assets.add_icon_green}/>
             </div>
        }
      </div>
      <div className="fooditeminfo">
        <div className="fooditemnamerating">
             <p>{ name }</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="fooditemdescription">{description}</p>
      <p className="fooditemprice"> ₹{price}</p>
    </div>
  )
}

export default Fooditem
