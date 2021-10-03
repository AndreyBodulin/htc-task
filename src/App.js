import './App.css';
import React from "react";
import Header from "./Header.js";
import Footer from './Footer.js';
import Movie_news from './Movie_news.js';
import Genre_movie from './Genre_movie';
import Channels from './Channel';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

function changeTabsMovie(){
  document.addEventListener('click',event => {
    if (event.target.className == 'tabs_movies'){
      document.getElementsByClassName('tabs_channels_active')[0].className = 'tabs_channels';
      event.target.className = "tabs_movies_active";
    }
  })
}

function changeTabsChannel(){
  document.addEventListener('click',event => {
    if (event.target.className == 'tabs_channels'){
      document.getElementsByClassName('tabs_movies_active')[0].className = 'tabs_movies';
      event.target.className = "tabs_channels_active";
    }
  })
}

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div class="tabs container">
          <Link onClick={changeTabsMovie} className="tabs_movies_active" to='/'>Фильмы</Link>
          <Link onClick={changeTabsChannel} className="tabs_channels" to='/channels'>Телеканалы</Link>
        </div>
        <Switch>
            <Route exact path='/'>
              <Movie_news />
              <Genre_movie />
            </Route>
            <Route path='/channels'>
              <Channels />
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;