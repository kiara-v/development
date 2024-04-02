import { useState } from "react";
import { AddToFavorites } from "./../services/MovieService";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import dayjs from "dayjs";
import { FaHeart } from 'react-icons/fa';
import "./card.css";
export const MovieCard = ({ className, movie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  var [isFavorited, setIsFavorited] = useState(null);
  const favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];
  isFavorited = favMovies.find(m => m.id === movie.id);
  const onFavoriteClick = () => {
    AddToFavorites(movie);
    setIsFavorited(!isFavorited);
  };
  const rating = movie.vote_average.toFixed(1);

  return (
    <div className="movieCard">
      <div className="posterBlock">
      <span class=" lazy-load-image-background blur lazy-load-image-loaded">
      <img
          src={posterPath}
          className="img-fluid card-image-top posterImg"
          alt="movie banner"
        />
        </span>
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>

        {/* <button
            className="btn btn-outline-secondary fav"
            onClick={onFavoriteClick}
          >
            <i className="bi bi-heart p-2 mt-1"></i>
          </button> */}

<button onClick={onFavoriteClick} className="fav">
      <FaHeart 
        color={isFavorited ? 'red' : 'gray'} 
        size={24}
      />
    </button>
          
    
        

        
        {/* <div className="card-body">
          <div>
            <i className="bi bi-star-fill text-yellow"></i>{" "}
            <i>{movie.vote_average}</i>{" "}
          </div>
          <h6 className="card-title">{movie.original_title}</h6>
          <button
            className="btn btn-outline-secondary"
            onClick={onFavoriteClick}
          >
            <i className="bi bi-heart p-2 mt-1"></i>
            Favorite
          </button>
        </div> */}
      </div>

      <div className="textBlock">
                <span className="title">{movie.title || movie.name}</span>
                <span className="date">
                    {dayjs(movie.release_date).format("MMM D, YYYY")}
                </span>
            </div>
    </div>
  );
};
