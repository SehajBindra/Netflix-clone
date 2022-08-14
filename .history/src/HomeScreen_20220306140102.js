import React from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
    </div>
  );
}

export default HomeScreen;
