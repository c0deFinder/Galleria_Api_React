import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import './Gallery.css'


const Gallery = () => {
  const { photos, setPhotos } = useContext(MyContext);

  const favorito = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    })
    setPhotos(newPhotos);
  };
  return (
    <div className="gallery grid-columns-5 p-3 gap-3 grid grid-cols-5 grid-rows-3 md:grid md:grid-cols-5 md:grid-rows-3 ">
      {photos.map((photo) => (
        <div
          onClick={() => favorito(photo.id)}
          className="image"
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
  );
};

export default Gallery;