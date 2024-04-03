import React, { useEffect, useState } from 'react';
import Img from '../lazyLoadImage/img';
import "../home/hero.css";
import {
  GetPopular,
} from "../services/MovieService";

export const SearchMovie = ({ onSearch }) => {
  const onInputChange = (e) => {
    onSearch(e.target.value);
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const [background, setBackground] = useState("");
  // const data = axios.get(`${apiUrl}/movie/upcoming`, {
  //   params: { language: "en-US" },
  // });
  const loadBG = async () => {
    const data = (await GetPopular()).data;
      const bg = "https://image.tmdb.org/t/p/original" + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
      setBackground(bg);
      console.log(data)
  };
  // const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    loadBG();
  }, []);

  return (
    <div class="heroBanner">
      {<div className="backdrop-img">
        <Img src={background} />
      </div>}
      <div class="opacity-layer"></div>
      <div class="contentWrapper">
        <div class="heroBannerContent">
          <span class="title">Welcome!</span>
          <span class="subTitle">A World of Movies to Discover...</span>
          <div class="searchInput">
            <input type="text" onChange={onInputChange} placeholder="Search a movie..." />
            {/* <button>Search</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
