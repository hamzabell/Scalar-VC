import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import { HomePage, JoinUsPage, AboutUs, ContactUs } from "./pages";
import { useMenuContext, useImageContext } from "./context";
import { MobileMenu, Header, Footer, Loader } from "./components";
import { Global } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
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
  const [imageStatus] = useImageContext();
  return (
    <>
      <Helmet>
        <title>Scalar VC</title>
        <meta
          name="description"
          content="We believe the next $1B companies are among the Student startups
          ecosystem. We are daring enough to believe in them,fund them and
          support them to success."
        />
      </Helmet>
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
          {imageStatus !== "loaded" && <Loader />}

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
    </>
  );
}

export default App;
