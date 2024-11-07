import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const url="http://localhost:4000";
  const [token,settoken]=useState("");
  const [food_list,setfoodlist]=useState([]);

  const addtocart = async(itemId) => {
    if (!cartitem[itemId]) {
      setcartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
    }
  };

  const removefromCart = async  (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
      
    }
  };

  const getTotalCartamount = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartitem[item];
      }
    }
    return totalAmount;
  };

  const fetchfoodlist=async ()=>{
    const response=await axios.get(url+"/api/food/list");
    setfoodlist(response.data.data);
  }

  const loadcartdata= async(token)=>{
    const response=axios.post(url+"/api/cart/get",{},{headers:{token}});
    setcartitem((await response).data.cartData);
  }
  useEffect(()=>{

       async function loadData (){
        await fetchfoodlist()
      
       if(localStorage.getItem("token")){
        settoken(localStorage.getItem("token"));
        await  loadcartdata(localStorage.getItem("token"));
       }

      }
       loadData();
  },[])

  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromCart,
    getTotalCartamount,
    url,
    token,
    settoken
  };

  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StorecontextProvider;
