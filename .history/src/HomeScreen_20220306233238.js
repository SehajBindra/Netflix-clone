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
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchDocumentaries}
       isLargeRow
       
       
       />
       <Row 
       title= "Horror Movies"
       fetchURL={requests.fetchHorrorMovies}
       isLargeRow
       
       
       />
       <Row 
       title= "Netflix Originals"
       fetchURL={requests.fetchActionMovies}
       isLargeRow
       
       
       />
       
      
    </div>
  );
}

export default HomeScreen;
