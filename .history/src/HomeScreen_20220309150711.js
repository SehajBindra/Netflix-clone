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
       title = "Action"
       fetchURL= {requests.fetchActionMovies}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Sci fi"
       fetchURL= {requests.fetchSciFi}
       IsLargeRow
       
       
       />
       <Row 
       title = "Mystery"
       fetchURL= {requests.fetchMystery}
       IsLargeRow
       
       
       />
       <Row 
       title = "Western"
       fetchURL= {requests.fetchWestern}
       IsLargeRow
       
       
       />
       <Row 
       title = "Animation"
       fetchURL= {requests.fetchAnimation}
       IsLargeRow
       
       
       />
       <Row 
       title = "tv"
       fetchURL= {requests.fetchTV}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Horror"
       fetchURL= {requests.fetchHorrorMovies}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Comedy "
       fetchURL= {requests.fetchComedyMovies}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Romance"
       fetchURL= {requests.fetchRomanceMovies}
       IsLargeRow
       
       
       />
       
       <Row 
       title = "Thriller"
       fetchURL= {requests.fetchThriller}
       IsLargeRow
       
       
       />
       
      
    </div>
  );
}

export default HomeScreen;
