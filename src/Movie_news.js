import react from "react";
import './App.css';

function Movie(props){
    return(
        <div className='content_movie'>
          <img className="movie_picture" src={props.photo} alt="no photo" />
          <span>{props.text}</span>
        </div>
    )
};
function Movie_news(props){
    return(
        <div className="block_news container">
        <img src="assets/news.jpg" alt="no photo" className="news_title"></img>
        <div className="news_movies">
          <Movie photo='assets/cat.jpg' text='Мульт в кино. Выпуск №103. Некогда грустить!'/>
          <Movie photo='assets/batman.jpg' text='Новый Бэтмен'/>
          <Movie photo='assets/hollywood.jpg' text='Однажды... в Голливуде'/>
          <Movie photo='assets/girl.jpg' text='Стриптизёрши'/>
        </div>
      </div>
    )
};
export default Movie_news;