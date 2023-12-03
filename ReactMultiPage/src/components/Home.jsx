import React from "react";
import "./homepage.css";

function Home() {
  return (
    <div className="home">          
      <div class="wrapper">  
      <div class="carousel">
        <div class="inner">
          <div class="slide active">
            <h1>1</h1>
          </div>
          <div class="slide">
            <h1>2</h1>
          </div>
          <div class="slide">
            <h1>3</h1>
          </div>
        </div>
        <div class="arrow arrow-left"></div>
        <div class="arrow arrow-right"></div>
      </div>
      </div>  
    </div>
  );
}

export default Home;
