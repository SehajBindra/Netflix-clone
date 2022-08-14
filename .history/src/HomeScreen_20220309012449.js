import React from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row"
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

       <Row 
       title = "Netflix Originals"
       fetchURL = {requests.fetchNetflixOriginals}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Comedy Movies"
       fetchURL= {requests.fetchActionMovies}
       IsLargeRow
       
       
       />
       
      
    </div>
  );
}

export default HomeScreen;
