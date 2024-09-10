import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const AboutUs = () => {
//     return (
//         <div> 
//             <h1>Welcome to About Us page !!!</h1>
//             <User name = "Vivin (functional)" location = "Bangalore (Functional)"/>
//             <UserClass name = "Vivin (Class)" location = "Bangalore (Class)"/>

//         </div>
//     )
// };

class AboutUs extends React.Component {
    constructor (props){
        super(props)
    
        console.log("Parent(AboutUS) constructor")

        this.state  = {
            name: "First-Name"
        }

    };

    componentDidMount(){
        console.log("Parent(AboutUS) Component-Did mount ")
    }

    render() {

        console.log("Parent(AboutUS) Render before UserClass");
        return(
            <div>
                <UserClass name= {"This is UserClass Class"} Bangalore = {"userClass Bangalore"} />
               
            </div>
        );

        console.log("Parent(AboutUS) Render after UserClass");
    };

};



export default AboutUs ; 
