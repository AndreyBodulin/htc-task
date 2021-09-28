import './App.css';
import React from "react";
import Header from "./Header.js";
import Footer from './Footer.js';
import Movie_news from './Movie_news.js';
import Genre_movie from './Genre_movie';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function Tabs(props){
  return(
    <div class="tabs">
        <span className="tabs_movies_active">Фильмы</span>
        <span className="tabs_channels">Телеканалы</span>
    </div>
  )
}


function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <Movie_news />
      <Genre_movie />
      <Footer />
    </div>
  );
};
export default App;