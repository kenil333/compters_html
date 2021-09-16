import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./component/jsfiles/Navbar";
import ScrollToTop from "./component/jsfiles/ScrollToTop";
import Home from "./component/jsfiles/Home";
import About from "./component/jsfiles/About";
import Services from "./component/jsfiles/Services";
import Testimonial from "./component/jsfiles/Testimonial";
import Blog from "./component/jsfiles/Blog";
import Contact from "./component/jsfiles/Contact";
import BlogDes from "./component/jsfiles/BlogDes";

function App() {

  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <div>
        <Navbar />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/service'>
              <Services />
            </Route>
            <Route path='/testimonial'>
              <Testimonial />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/blogdescription'>
              <BlogDes />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
