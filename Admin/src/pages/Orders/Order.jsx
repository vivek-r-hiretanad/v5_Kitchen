// // import React, { useState, useEffect } from 'react';
// // import './Order.css';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { assets } from '../../assets/assets';

// // const Order = ({ url }) => {
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrders = async () => {
// //     try {
// //       const response = await axios.get(url + "/api/order/list");
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //         console.log(response.data.data);
// //       } else {
// //         toast.error("Error fetching orders");
// //       }
// //     } catch (error) {
// //       toast.error("Network or server error");
// //     }
// //   };

// //  const statusHandler=async(event,orderId)=>{
// // const response=await axios.post(url+"/api/order/status",{
// //   orderId,
// //   status:event.target.value
// // })

// // if(response.data.success){
// //   await fetchAllOrders();
// // }

// //  }

// //   useEffect(() => {
// //     fetchAllOrders();
// //   }, []);

// //   return (
// //     <div className='order add'>
// //       <h3>Order Page</h3>
// //       <div className="order-list">
// //         {orders.map((order, index) => (
// //           <div key={index} className="order_item">
// //             <img src={assets.parcel_icon} alt="Parcel Icon" />
// //             <div>
// //               <p className='order-item-food'>
// //                 {Array.isArray(order.items) && order.items.map((item, idx) => (
// //                   <span key={idx}>
// //                     {item.name} x {item.quantity}
// //                     {idx !== order.items.length - 1 && ", "}
// //                   </span>
// //                 ))}
// //               </p>
              
// //                 <p className="order-item-name">
// //                       {order.address.firstname +" "+order.address.lastname}
// //                 </p>
// //                 <div className="order-item-address">
// //                   <p>{order.address.street+","}</p>
// //                   <p>{order.address.city+" , " +order.address.state+", "+order.address.country+","+order.address.zipcode}</p>
// //                 </div>
// //                 <p className="order-item-phone">
// //                   {order.address.phone}
// //                 </p>
         
// //             </div>
// //             <p>Items:{order.items.length}</p>
// //             <p> ₹{order.amount}</p>
// //             <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} >
// //               <option value="Food Processing">Food Processing</option>
// //               <option value="Out for delivery">Out for delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;


// // import React, { useState, useEffect } from 'react';
// // import './Order.css';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { assets } from '../../assets/assets';

// // const Order = ({ url }) => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Fetch all orders with error handling and loading state
// //   const fetchAllOrders = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await axios.get(url + "/api/order/list");
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //         console.log(response.data.data);
// //       } else {
// //         toast.error("Error fetching orders");
// //       }
// //     } catch (error) {
// //       toast.error("Network or server error");
// //       setError("Failed to fetch orders");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle status change for an order
// //   const statusHandler = async (event, orderId) => {
// //     const selectedStatus = event.target.value;
// //     try {
// //       const response = await axios.post(url + "/api/order/status", {
// //         orderId,
// //         status: selectedStatus,
// //       });
      
// //       if (response.data.success) {
// //         // Update the local orders state with the new status
// //         setOrders((prevOrders) => {
// //           return prevOrders.map((order) =>
// //             order._id === orderId ? { ...order, status: selectedStatus } : order
// //           );
// //         });
// //         toast.success("Order status updated");
// //       } else {
// //         toast.error("Error updating status");
// //       }
// //     } catch (error) {
// //       toast.error("Error updating status");
// //     }
// //   };

// //   // Fetch orders when the component mounts
// //   useEffect(() => {
// //     fetchAllOrders();
// //   }, []);

// //   if (loading) return <div>Loading orders...</div>;

// //   if (error) return <div>{error}</div>;

// //   return (
// //     <div className='order add'>
// //       <h3>Order Page</h3>
// //       <div className="order-list">
// //         {orders.map((order) => (
// //           <div key={order._id} className="order_item">
// //             <img src={assets.parcel_icon} alt="Parcel Icon" />
// //             <div>
// //               <p className='order-item-food'>
// //                 {Array.isArray(order.items) && order.items.map((item, idx) => (
// //                   <span key={idx}>
// //                     {item.name} x {item.quantity}
// //                     {idx !== order.items.length - 1 && ", "}
// //                   </span>
// //                 ))}
// //               </p>
// //               <p className="order-item-name">
// //                 {order.address.firstname} {order.address.lastname}
// //               </p>
// //               <div className="order-item-address">
// //                 <p>{order.address.street},</p>
// //                 <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
// //               </div>
// //               <p className="order-item-phone">{order.address.phone}</p>
// //             </div>
// //             <p>Items: {order.items.length}</p>
// //             <p>₹{order.amount}</p>
// //             <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
// //               <option value="Food Processing">Food Processing</option>
// //               <option value="Out for delivery">Out for delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;


// import React, { useState, useEffect } from 'react';
// import './Order.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { assets } from '../../assets/assets';

// const Order = ({ url }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch all orders with error handling and loading state
//   const fetchAllOrders = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(url + "/api/order/list");
//       if (response.data.success) {
//         setOrders(response.data.data);
//         console.log(response.data.data);
//       } else {
//         toast.error("Error fetching orders");
//       }
//     } catch (error) {
//       toast.error("Network or server error");
//       setError("Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle status change for an order
//   const statusHandler = async (event, orderId) => {
//     const selectedStatus = event.target.value;
//     try {
//       if (selectedStatus === "Delivered") {
//         // Send a delete request to remove the order from the database
//         const deleteResponse = await axios.post(url + "/api/order/remove", { orderId });
  
//         if (deleteResponse.data.success) {
//           toast.success("Order removed successfully");
//           // Remove the order from the local state after successful deletion
//           setOrders((prevOrders) => prevOrders.filter(order => order._id !== orderId));
//         } else {
//           toast.error("Error removing the order");
//         }
//       } else {
//         // Update the order status if not "Delivered"
//         const response = await axios.post(url + "/api/order/status", {
//           orderId,
//           status: selectedStatus,
//         });
  
//         if (response.data.success) {
//           // Update the local orders state with the new status
//           setOrders((prevOrders) => {
//             return prevOrders.map((order) =>
//               order._id === orderId ? { ...order, status: selectedStatus } : order
//             );
//           });
//           toast.success("Order status updated");
//         } else {
//           toast.error("Error updating status");
//         }
//       }
//     } catch (error) {
//       toast.error("Error updating status");
//     }
//   };
  
//   const removeOrder = async (orderId) => {
//     try {
//       const response = await axios.post(`${url}/api/order/remove`, { orderId });
//       if (response.data.success) {
//         // Remove the order from the local state
//         setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
//         toast.success(response.data.message);  // Show success message
//       } else {
//         toast.error(response.data.message);  // Show error message
//       }
//     } catch (error) {
//       toast.error("Failed to remove order. Please try again.");
//     }
//   };

//   // Fetch orders when the component mounts
//   useEffect(() => {
//     fetchAllOrders();
//   }, []);

//   if (loading) return <div>Loading orders...</div>;

//   if (error) return <div>{error}</div>;

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order) => (
//           <div key={order._id} className="order_item">
//             <img src={assets.parcel_icon} alt="Parcel Icon" />
//             <div>
//               <p className='order-item-food'>
//                 {Array.isArray(order.items) && order.items.map((item, idx) => (
//                   <span key={idx}>
//                     {item.name} x {item.quantity}
//                     {idx !== order.items.length - 1 && ", "}
//                   </span>
//                 ))}
//               </p>
//               <p className="order-item-name">
//                 {order.address.firstname} {order.address.lastname}
//               </p>
//               <div className="order-item-address">
//                 <p>{order.address.street},</p>
//                 <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
//               </div>
//               <p className="order-item-phone">{order.address.phone}</p>
//             </div>
//             <p>Items: {order.items.length}</p>
//             <p>₹{order.amount}</p>
//             <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Order;




import React, { useState, useEffect } from 'react';
import './Order.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all orders with error handling and loading state
  const fetchAllOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Network or server error");
      setError("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  // Handle status change for an order
  const statusHandler = async (event, orderId) => {
    const selectedStatus = event.target.value;
    try {
      if (selectedStatus === "Delivered") {
        // Send a delete request to remove the order from the database
        const deleteResponse = await axios.post(url + "/api/order/remove", { orderId });

        if (deleteResponse.data.success) {
          toast.success("Order removed successfully");
          // Remove the order from the local state after successful deletion
          setOrders((prevOrders) => prevOrders.filter(order => order._id !== orderId));
        } else {
          toast.error("Error removing the order");
        }
      } else {
        // Update the order status if not "Delivered"
        const response = await axios.post(url + "/api/order/status", {
          orderId,
          status: selectedStatus,
        });

        if (response.data.success) {
          // Update the local orders state with the new status
          setOrders((prevOrders) => {
            return prevOrders.map((order) =>
              order._id === orderId ? { ...order, status: selectedStatus } : order
            );
          });
          toast.success("Order status updated");
        } else {
          toast.error("Error updating status");
        }
      }
    } catch (error) {
      toast.error("Error updating status");
    }
  };

  // Fetch orders when the component mounts
  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order._id} className="order_item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className='order-item-food'>
                {Array.isArray(order.items) && order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx !== order.items.length - 1 && ", "}
                  </span>
                ))}
              </p>
              <p className="order-item-name">
                {order.address.firstname} {order.address.lastname}
              </p>
              <div className="order-item-address">
                <p>{order.address.street},</p>
                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <div className='order-status'>
              <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

