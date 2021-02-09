import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, JoinUsPage, AboutUs, ContactUs } from "./pages";
import { useMenuContext } from "./context";
import { MobileMenu, Header, Footer } from "./components";
import { Global } from "./styled";

function App() {
  const [isMenuOpen] = useMenuContext();
  return (
    <Router>
      <Global />
      <Header />
      {isMenuOpen && <MobileMenu />}
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/joinus" component={JoinUsPage} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
