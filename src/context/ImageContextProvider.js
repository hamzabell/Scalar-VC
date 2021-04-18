import React from "react";

const ImageContext = React.createContext(null);

export const useImageContext = () => React.useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [imageStatus, setImageStatus] = React.useState("not-loaded");
  return (
    <ImageContext.Provider value={[imageStatus, setImageStatus]}>
      {children}
    </ImageContext.Provider>
  );
};
