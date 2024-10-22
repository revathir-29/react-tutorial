import React from "react";

const App = () => {
  let x = 1;

  const handleAdd =() => {
      x = x+1;
      console.log("X" , x);
  }

  return <div>App</div>;
};
export default App;
