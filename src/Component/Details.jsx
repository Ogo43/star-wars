import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const movie_id = useParams();
  const navigate = useNavigate();
  const [movie_data, setMovieData] = useState({});

  useEffect(() => {
    const loadCurrentMovie = async () => {
      try {
        let response = await fetch(
          `https://swapi.dev/api/films/${movie_id.id}`
        );
        let data = await response.json();
        setMovieData(data);
      } catch (err) {
        console.log("Error occurred:", err);
      }
    };
    loadCurrentMovie();
  }, [movie_id.id]);
  return (
    <div className="next-page">
      <div>
        <button className="return-btn" onClick={() => navigate(-1)}>
          Back to list
        </button>
      </div>
      {movie_data?.title ? (
        <div>
          <div>
            <h2 className="header">{movie_data.title}</h2>
            <p className="director">Director : {movie_data.director}</p>
            <p className="producer">Producer : {movie_data.producer}</p>
          </div>

          <div>
            <h5>Description</h5>
            <p>{movie_data.opening_crawl}</p>
          </div>

          <hr />

          <div>
            <h5>Characters</h5>
            <ul>
              {movie_data.characters.map(chr => (
                <li>{chr.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Planets</h5>
            <ul>
              <li>Tatooine</li>
              <li>Tatooine</li>
              <li>Tatooine</li>
            </ul>
          </div>

          <hr />

          <div>
            <h5>Species</h5>
            <ul>
              <li>Human</li>
              <li>Human</li>
              <li>Human</li>
              <li>Human</li>
              <li>Human</li>
            </ul>
          </div>

          <hr />

          <div>
            <h5>Starships</h5>
            <ul>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
              <li>CR90 corvette</li>
            </ul>
          </div>

          <hr />

          <div>
            <h5>Vehicles</h5>
            <ul>
              <li>Sand Crawler</li>
              <li>Sand Crawler</li>
              <li>Sand Crawler</li>
              <li>Sand Crawler</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Details;
