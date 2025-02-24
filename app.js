import React from "react";
import ReactDOM from "react-dom/client";
//react element
const heading = <h1 id="heading">Hello world from JSX</h1>;
//react component
const Compo = () => <h1>Hello from the functional components</h1>;

const Compo2 = () => (
    <>
        <Compo />
        <h1> Hello from compo 2</h1>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Compo2 />);
