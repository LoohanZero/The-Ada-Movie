import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Container from "./components/primitive/Container";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TVSeries from "./pages/TVSeries";
import Categories from "./pages/categories/Categories";
import TVShow from "./pages/TVShow";
import Trailer from "./pages/Trailer";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Movie";

function App() {
  return (
    <Container className="main-aside-container">
      <Router>
        <Aside />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie">
            <Movies />
          </Route>
          <Route exact path="/tv">
            <TVSeries />
          </Route>
          <Route exact path="/:media/category/:category">
            <Categories />
          </Route>
          <Route path="/tv/:TVId">
            <TVShow />
          </Route>
          <Route path="/movie/:movieId">
            <Movie />
          </Route>
          <Route exact path="/video/:media/:id">
            <Trailer />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
