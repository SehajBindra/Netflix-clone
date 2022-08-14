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
       title= "Netflix Originals"
       fetchURL={requests.fetchNetflixOriginals}
       isLargeRow
       
       
       />
       <Row 
       title= "Horror Movies"
       fetchURL={requests.fetchHorrorMovies}
     
       
       />
       <Row 
       title= "Action Movies"
       fetchURL={requests.fetchActionMovies}
    
       
       
       />
       <Row 
       title= "ComedyMovies"
       fetchURL={requests.fetchComedyMovies}
  
       
       
       />
       <Row 
       title= "ActionMovies"
       fetchURL={requests.fetchfetchActionMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "Trending"
       fetchURL={requests.fetchTrending}
  
       
       
       />
       <Row 
       title= "Romance"
       fetchURL={requests.fetchRomanceMovies}
   
       
       
       />
      
    </div>
  );
}

export default HomeScreen;
