import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";


const App = () => {
  return (
    <div>
      <h1> Hello world </h1>
      <div className="mb-30">
        <Hero />
      </div>
      <div>
        <Banner/>
      </div>
    </div>
  );
};

export default App;
