import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import { HomePage, JoinUsPage, AboutUs, ContactUs } from "./pages";
import { useMenuContext } from "./context";
import { MobileMenu, Header, Footer } from "./components";
import { Global } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  const [isMenuOpen] = useMenuContext();
  return (
    <Router>
      <ScrollToTop>
        <Global />
        <Header />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />

        {isMenuOpen && <MobileMenu />}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/joinus" component={JoinUsPage} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={AboutUs} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
