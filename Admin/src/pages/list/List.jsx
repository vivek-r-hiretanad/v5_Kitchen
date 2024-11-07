// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const List = ({url}) => {
    

//     const [list,setlist]=useState([]);

//     const fetch_list=async ()=>{
//          const response=await axios.get(` ₹{url}/api/food/list`);
//         // console.log(response.data);
         

//          if(response.data.success){
//             setlist(response.data.data)
//          }
//          else{
//             toast.error("Error");
//          }
//     }

//   const removeFood=async(foodId)=>{
//       //console.log(foodId);

//       const response=await axios.post(` ₹{url}/api/food/remove`,{id:foodId});
//       await fetch_list();
//       if(response.data.success){
//         toast.success(response.data.message);
//       }
//       else{
//         toast.error("error");
//       }
      
//   }


//  useEffect(()=>{
//     fetch_list();
//  },[])


//   return (
//     <div className='list add flex-col'>
//         <p>All Foods list</p>

//         <div className="list-table">
//             <div className="list-tableformat title">
//                <b>Image</b>
//                <b>Name</b>
//                <b>Category</b>
//                <b>Price</b>
//                <b>Action</b>
//             </div>
//             {list.map((item,index)=>{
//                 return(
//                     <div key={index} className='list-tableformat'>
//                         <img src={` ₹{url}/images/`+item.image} alt="" />
//                         <p>{item.name}</p>
//                         <p>{item.category}</p>
//                         <p> ₹{item.price}</p>
//                         <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>

//                     </div>
//                 )
//             })}
//         </div>
      
//     </div>
//   )
// }

// export default List




import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setlist] = useState([]);

  const fetch_list = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setlist(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Network or server error");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetch_list(); // Refresh the list after removing food
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      toast.error("Network or server error");
    }
  };

  useEffect(() => {
    fetch_list();
  }, [url]);

  return (
    <div className='list add flex-col'>
      <p>All Foods list</p>
      <div className="list-table">
        <div className="list-tableformat title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-tableformat'>
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
