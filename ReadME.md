# Namaste react

<!-- in package.json, main : app.js was commented when we used
        npx parcel build index.html  in terminal
        when we use parcel, we indicate that the entry point is index.html, here main : app.js used to indicate entry is through app.js, so there has been a conflict -->


// const parent = React.createElement("div",{id: "parent"}, 
//     [
//     React.createElement("div",{id: "child1"},
//         [
//             React.createElement("H1",{},"H1 tag"),
//             React.createElement("H2",{},"H2 tag")
//         ]
//     ),
//     React.createElement("div",{id: "child2"},
//         [
//             React.createElement("H1",{},"H1 tag"),
//             React.createElement("H2",{},"H2 tag")
//         ]
//     )
// ]);




Food App Structure

/**
 * Header
 *  - Logo
 *  - Nav Item
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 * Footer
 *  - copyright
 *  - links
 *  - Address
 *  - Contact
 * 
 */




 old app.js content

// const heading = React.createElement("h1", {}, "hello world, welcme to react!") ;
// const root = ReactDOM.createRoot(document.getElementById("divisionid")) ;
// root.render(heading);

// import React from "react";
// import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1", 
//     {id: "heading"},
//     "namaste react"
// );

// JSX

// const jsxHeading = <h1 className="jsxHeading"> namaste react JSX </h1>
 
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("divisionid"));

// console.log(root);

// root.render(jsxHeading);

// const Title = () => (
//     <h1 className="head">namaste React Title</h1>
// );


// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">namaste React Functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("divisionid"));
// root.render(<HeadingComponent />);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
