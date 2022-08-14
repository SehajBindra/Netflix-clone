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
       fetchURL= {requests.fetchNetflixOriginals}
       isLargeRow
       
       
       />
       <Row 
       title= "Horror Movies"
       fetchURL= {requests.fetchHorrorMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "Action Movies"
       fetchURL= {requests.fetchActionMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "ComedyMovies"
       fetchURL= {requests.fetchComedyMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "ActionMovies"
       fetchURL= {requests.fetchActionMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "TopRated"
       fetchURL= {requests.fetchTopRated}
       isLargeRow
       
       
       />
       <Row 
       title= "Romance "
       fetchURL= {requests.fetchRomanceMovies}
       isLargeRow
       
       
       />
      
    </div>
  );
}

export default HomeScreen;
