import React from "react";
import ReactDOM from "react-dom";

 const parent = React.createElement("div" , {id : "parent"} , [
    React.createElement("div", {id : "child"} , [
        React.createElement("h1",{},"Im the h1 tag"),
        React.createElement("h2",{},"Im the h2 tag"),
    ]),
    React.createElement("div", {id : "child2"} , [
        React.createElement("h1",{},"Im the h1 tag"),
        React.createElement("h2",{},"Im the h2 tag"),
    ])
 ]) ;

 console.log(parent);
 const container = document.getElementById("root");
 const root = ReactDOM.createRoot(container);
 root.render(parent);
