import { useEffect, useState } from "react";
import { MovieCard } from "../movie/Card";
import {
  DiscoverMovies,
  GetPopular,
  SearchMovies,
} from "../services/MovieService";
import { SortBar } from "../movie/SortBar";
import { Error } from "../utils/Error";
import { MovieList } from "../movie/List";
import { FilterMovies } from "../movie/Filter";

export const FavoriteMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    let favMoviesJSON = localStorage.getItem("fav_movies");
    if (favMoviesJSON) {
      setMovies(JSON.parse(favMoviesJSON));
    }
  }, []);

  const loadPopularMovies = async () => {
    try {
      const response = await GetPopular();
      setMovies(response.data.results);
    } catch (e) {
      setError(e.data.status_message);
    }
  };

  const onSort = async (sortBy) => {
    if (!sortBy) {
      loadPopularMovies();
      return;
    }

    setSortBy(sortBy);

    try {
      const response = await DiscoverMovies(sortBy);
      setMovies(response.data.results);
    } catch (e) {
      setError(e.data.status_message);
    }
  };

  const onFilter = async (filterBy) => {
    if (!filterBy) {
      loadPopularMovies();
      return;
    }
    setFilterBy(filterBy);
    try {
      const response = await DiscoverMovies(sortBy, filterBy);
      setMovies(response.data.results);
    } catch (e) {
      setError(e.data.status_message);
    }
  };

  return (
    <div className="favorites">
      <div class="pageHeader">
        <div class="pageTitle">Favorite Movies</div>
        </div>
          {error ? <Error message={error} /> : ""}
          <div className="row">
            <div className="col-12 col-md-3 sort-bar">
              <div className="card shadow-lg p-2">
                <SortBar onSort={onSort} />
                <FilterMovies onFilter={onFilter} />
              </div>
            </div>
            <div className="col-12 col-md-9">
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
  );
};
