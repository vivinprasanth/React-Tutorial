import { webpage_logo } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [buttonName, setbuttonName] = useState("Login")


    return (
        <div className="header">
            <div className="Logo-Container">
                {/* <img src="Images/App-Logo.png" className="App-Logo" /> */}
                <img src= {webpage_logo} 
                    className="logo" />
            </div>
            <div className="Nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="LoginLogoutButton" 
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