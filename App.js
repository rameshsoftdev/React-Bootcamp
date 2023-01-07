import React from "react";
import ReactDOM from "react-dom/client";

const Relement = <h1>Heading 2</h1>;

// 1st Way of Functional component
const Rcomponet = ()=>{
  return <div>
  <h2>This is from Rcomponet</h2>
</div>
};

// 2nd Way of Functional component
const RcomponetAnotherWay = ()=>(
  <div>
    <h2>This is from RcomponetAnotherWay</h2>
  </div>
);


const AppLayout = ()=>{
  return (
    <div>
      {Relement}
      <Rcomponet />
      <RcomponetAnotherWay />
      {Rcomponet()}
      <h2>App Component</h2>  
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);