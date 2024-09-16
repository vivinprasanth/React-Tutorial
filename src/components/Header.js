import { Link } from "react-router-dom";
import { webpage_logo } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonName, setbuttonName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    return (
        <div className = "header flex justify-between bg-pink-100 shadow-xl">
            <div className="Logo-Container">
                {/* <img src="Images/App-Logo.png" className="App-Logo" /> */}
                <img className="logo w-32" src= {webpage_logo} 
                     />
            </div>
            <div className="Nav-Items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "Online !!" : "Not Online :)"}
                    </li>
                    <li className="px-4 hover:bg-slate-400">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4 hover:bg-slate-400">
                        <Link to={"/AboutUs"}>About Us</Link>
                    </li>
                    <li className="px-4 hover:bg-slate-400">
                        <Link to={"/Contact"}>Contact</Link>
                    </li>
                    <li className="px-4 hover:bg-slate-400">
                        <Link to={"/Grocery"}>Grocery</Link>
                    </li>
                    <li className="px-4 hover:bg-slate-400">
                        Cart
                    </li>
                    <button className="LoginLogoutButton px-2 border border-orange-500 border-2  hover:bg-slate-400" 
                    onClick={()=>{
                        return buttonName === "Login" 
                        ? setbuttonName("Logout") 
                        : setbuttonName("Login") ;
                    }}>{buttonName}</button>
                    {/* using ternary operator on the login logout button */}
                </ul>
            </div>
        </div>
    )
};

export default Header ;