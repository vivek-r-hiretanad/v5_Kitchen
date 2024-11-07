// import React, { useContext, useState } from 'react'
// import { Storecontext } from '../../context/Storecontext';
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom';


// const Navbar = ({setshowLogin}) => {
//     const [menu,setmenu]=useState("menu");

//   const {getTotalCartamount,token,settoken}=useContext(Storecontext);
 
//   const navigate=useNavigate();
  
//   const logout=()=>{
//           localStorage.removeItem("token");
//           settoken("");
//           navigate("/home");

//   }

//   return (
//     <div className='navbar'>
//       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
//       <ul className="navbar-menu">
//         <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
//         <a  href='#exploremenu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
//         <a  href='#appdownload' onClick={()=>setmenu("Mobile-app")}  className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
//         <a  href='#footer' onClick={()=>setmenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-Us</a>
//       </ul>

//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//             <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
//             <div className={getTotalCartamount()===0?"":"dot"}/>
     
//         </div>
//         {!token?
//         <button onClick={()=>setshowLogin(true)}>Sign in</button>
//         :<div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="" />
//             <ul className="navbarprofiledropdown">
//               <li onClick={()=>navigate('/myorders')}>
//                 <img  src={assets.bag_icon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" />
//                 <p>Logout</p>
//               </li>
//               <hr />

//             </ul>
//           </div>}
           
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react';
import { Storecontext } from '../../context/Storecontext';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setshowLogin }) => {
    const [menu, setmenu] = useState("menu");
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const { getTotalCartamount, token, settoken } = useContext(Storecontext);
    const navigate = useNavigate();

    // Function to handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (searchTerm.trim()) {
            // Navigate to search results page with the search term as a query parameter
            navigate(`/search?query=${searchTerm}`);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update the search term as the user types
    };

    const logout = () => {
        localStorage.removeItem("token");
        settoken("");
        navigate("/home");
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.V4_logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setmenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#exploremenu' onClick={() => setmenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#appdownload' onClick={() => setmenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={() => setmenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact-Us</a>
            </ul>

            <div className="navbar-right">
                {/* Search bar */}
                {/* <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <img src={assets.search_icon} alt="Search" />
                    </button>
                </form> */}

                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartamount() === 0 ? "" : "dot"} />
                </div>

                {!token ? (
                    <button onClick={() => setshowLogin(true)}>Sign in</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="navbarprofiledropdown">
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt="" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />
                                <p>Logout</p>
                            </li>
                            <hr />
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
