import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import axios from "axios";
import Img from '../lazyLoadImage/img';
import "../home/hero.css";
import useFetch from '../hooks/useFetch';

export const SearchMovie = ({ onSearch }) => {
  const onInputChange = (e) => {
    onSearch(e.target.value);
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const [background, setBackground] = useState("");
  // const data = axios.get(`${apiUrl}/movie/upcoming`, {
  //   params: { language: "en-US" },
  // }).then((res) => res.data);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = "https://image.tmdb.org/t/p/original" + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
    setBackground(bg);
    console.log(data)
  }, [data]);

  return (
    <div class="heroBanner">
      {!loading && <div className="backdrop-img">
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
