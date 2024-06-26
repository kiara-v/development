import { SearchMovie } from "./../movie/Search";
import { SortBar } from "../movie/SortBar";
import { useEffect, useState } from "react";
import {
  DiscoverMovies,
  GetPopular,
  SearchMovies,
} from "../services/MovieService";
import { Error } from "../utils/Error";
import { MovieList } from "../movie/List";
import { FilterMovies } from "../movie/Filter";
import { Favorites } from "../favorite/Favorites";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    try {
      const response = await GetPopular();
      setMovies(response.data.results);
    } catch (e) {
      setError(e.data.status_message);
    }
  };

  const onSearch = async (searchText) => {
    //if the input is empty then set movie list to popular movies otherwise search
    if (!searchText.trim()) {
      loadPopularMovies();
      console.log(filterBy);
      return;
    }

    try {
      const response = await SearchMovies(searchText);
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

  const favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];

  return (
    <>
      <div className="container">
      <SearchMovie onSearch={onSearch} />
      {/* {error ? <Error message={error} /> : ""}
      <SortBar onSort={onSort} />
      <FilterMovies onFilter={onFilter} />
      <MovieList movies={movies} /> */}
        <div className="row">
          {error ? <Error message={error} /> : ""}
          <div className="row">
            <div className="col-12 col-md-3 sort-bar">
              <div className="card shadow-lg p-2">
                <SortBar onSort={onSort} />
                <FilterMovies onFilter={onFilter} />
              </div>
              {/* <Favorites /> */}
            </div>
            <div className="col-12 col-md-9">
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
