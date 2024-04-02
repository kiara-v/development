export const Favorites = () => {
    var favs = JSON.parse(localStorage.getItem("fav_movies")) || [];

  return (
    <div>
      <h2>My Favorites</h2>
      {favs.map(movie => (
  <div className="movie" key={movie.id}>{movie.title}</div> 
))}
    </div>
  );
}