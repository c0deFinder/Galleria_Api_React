import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Link } from "react-router-dom";
import './Favorites.css'

const Favorites = () => {
  const { photos, setPhotos } = useContext(MyContext);
  const favoritoFiltrado = photos.filter((photo) => photo.liked === true);
  const favorito = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Favourites</h1>

      <div className="gallery grid-columns-5 p-3 gap-3 grid grid-cols-5 grid-rows-3 md:grid md:grid-cols-5 md:grid-rows-3">
        {favoritoFiltrado.map((photo) => (
          <div
            onClick={() => favorito(photo.id)}
            className="image_favorites"
            key={photo.id}
            style={{ backgroundImage: `url(${photo.src.landscape})` }}
          > 
            <div className="text_box">
                <p>{photo.liked ? "❤️" : "🤍"}</p>
                <p>{photo.photographer}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="button_Back"> 
            <button className="button_green">
              <Link to="/"> Back </Link>
            </button>
          </div>
    </div>
  );
};
export default Favorites;
