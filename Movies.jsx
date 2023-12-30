import React from 'react'
import moviesData from './MoviesData';
const Movies = () => {
  return (
    <div className="container">
{moviesData.map((e)=>{
    return (
      <article class='movie-img '>
        <img src={e.img} alt='img'  />
        <div class='movie-text'>
          <button type='button' class='btn stream-btn'>
            stream now
            <span>
              <i class='fas fa-play'></i>
            </span>
          </button>
          <h4 id='text'>{e.text}</h4>
        </div>
      </article>
    );
})}
    <div class='button-container section-center'>
      <button class='prev-btn'>
        <i class='fas fa-chevron-left'></i>
      </button>
      <button class='next-btn'>
        <i class='fas fa-chevron-right'></i>
      </button>
    </div>
    </div>
  );
}

export default Movies