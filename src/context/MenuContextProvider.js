import React from "react";

const MenuContext = React.createContext(null);

export const useMenuContext = () => React.useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
      {children}
    </MenuContext.Provider>
  );
};
