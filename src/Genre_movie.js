import react from "react";
import './App.css';

function Genre(props){
    return(
      <div className={props.genre}>
        <img className="genre_img" src={'assets/' + props.img + '.png'} alt='no photo'/>
        <span className='genre_span'>{props.text}</span>
      </div>
    )
};
function Genre_movie(props){
    return(
        <div>
            <span className='genre_title'>Жанры</span>
            <div className='block_genre container'>
                <Genre genre='comedy' text='Комедии' img='Comedy'/>
                <Genre genre='drama' text='Драмы' img='drama'/>
                <Genre genre='fantastic' text='Фантастика' img='alien'/>
                <Genre genre='horror' text='Ужасы' img='horror'/>
            </div>
      </div>
    )
};
export default Genre_movie;