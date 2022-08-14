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
       title = "Documentaries"
       fetchURL= {requests.fetchDocumentaries}
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
       
      
    </div>
  );
}

export default HomeScreen;
