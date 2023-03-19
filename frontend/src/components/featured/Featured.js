import React from 'react'
import './featured.scss'
import { PlayArrow, InfoOutlined } from '@mui/icons-material';

const Featured = ({ type }) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="triller">Triller</option>
                    <option value="romantic">Romantic</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="drama">Drama</option>
                    <option value="historical">Historical</option>
                    <option value="animation">Animation</option>
                </select>
            </div>
        )}
        <img 
        src="https://rare-gallery.com/uploads/posts/317245-Stranger-Things-Season-3-Characters-Poster-4K.jpg" alt="movie poster" />
        <div className="info">
            <img src="https://1000logos.net/wp-content/uploads/2019/06/Stranger-Things-Logo-2016.png" alt="title" />
            <span className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus culpa voluptatum aspernatur sunt nam eos quod pariatur ducimus, veniam facere ab tenetur ut tempore voluptates ratione quibusdam eaque quos repudiandae voluptas quis voluptatibus dicta temporibus. Quam sed porro laudantium amet.</span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined />
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured