import { useState } from "react";

const User = (props) => {
    
    const {name, location} = props
    const [funcCount, setFuncCount] = useState(0);
    return(

        <div className="User-Card">
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Class : Functional Class</h3>
            <h3>Functional count : {funcCount}</h3>
            <button onClick={() =>{
                setFuncCount(funcCount + 1);
            }}>
                Functional Count increase
            </button>
        </div>

    );

} ;

export default User;