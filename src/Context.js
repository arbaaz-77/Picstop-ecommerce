import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  const toggleFavorite = (id) => {
    const newArr = allPhotos.map((photo) => {
      if (photo.id == id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(newArr);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
        cartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
