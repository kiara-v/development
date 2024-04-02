import "../home/hero.css";

export const SearchMovie = ({ onSearch }) => {
  const onInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div class="heroBanner">
  <div class="backdrop-img">
    <span class="lazy-load-image-background blur lazy-load-image-loaded">
      <img class="" alt="" src="https://image.tmdb.org/t/p/original/1ZSKH5GGFlM8M32K34GMdaNS2Ew.jpg"/>
    </span>
  </div>
  <div class="opacity-layer"></div>
  <div class="contentWrapper">
    <div class="heroBannerContent">
      <span class="title">Welcome!</span>
      <span class="subTitle">A World of Movies to Discover...</span>
      <div class="searchInput">
        <input type="text" onChange={onInputChange} placeholder="Search a movie..."/>
        {/* <button>Search</button> */}
      </div>
    </div>
  </div>
</div>
  );
};
