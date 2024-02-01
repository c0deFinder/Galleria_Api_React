// MyContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://api.pexels.com/v1/curated", {
          headers: {
            Authorization: "sIWxTJJVusGlOtpin26SZLJZjPQqmZgqZat5Yuofk990TnjFRuAfN5rS",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchPhotos();
  }, []); 

  return (
    <MyContext.Provider value={{ photos, setPhotos }}>
      {children}
    </MyContext.Provider>
  );
};
