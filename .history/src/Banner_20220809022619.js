import axios from "./axios";
import React from "react";
import { useState } from "react";
import requests from "./Request";
import "./Banner.css";
import { useEffect } from "react";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchSciFi);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundsize: "cover",
        backgroundrepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play </button>
          <button className="banner_button"> More info </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
