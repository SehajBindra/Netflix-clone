import axios from "./axios";
import React from "react";

import { useEffect, useState } from "react";

import "./Row.css";

function Row({ title, fetchURL, IsLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);

      setMovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${IsLargeRow && "row_poster_Large"}`}
            key={movie.id}
            src={`${base_url}${
              IsLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
