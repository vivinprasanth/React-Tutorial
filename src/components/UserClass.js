import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props)
        console.log("Child(AboutUS) constructor")

        this.state = {
            count: 0,
            count2 : 2 

        };
        
    }

    componentDidMount(){
        console.log("Child(AboutUS) Component mount")

    }

    render() {
        const {name, location} = this.props
        
        const {count} = this.state;

        console.log("Child(AboutUS) render - 1 ")

        return(
            <div className="UserClass-Card">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Class : Component Class</h2>
                <h2>Count : {count}</h2>
                <button className="increase-button" onClick={() =>{
                    this.setState({
                        count : this.state.count + 1
                    });
                }}> 
                    Increase Count
                </button>

            </div>
        );  
        
        console.log("Child(AboutUS) render - 2")
        
    }
};

export default UserClass;

