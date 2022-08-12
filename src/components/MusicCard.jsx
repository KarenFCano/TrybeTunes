import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Proptypes from 'prop-types';
import '../styles/pages/album.css';

export default function MusicCard({ music }) {
  const { favorites } = useSelector(({ reducer }) => (reducer));
  const isFavorite = favorites.some((favorite) => favorite.trackId === music.trackId);
  const [favorite, setFavorite] = useState(isFavorite);
  const dispatch = useDispatch();

  console.log(music);

  const addFavorite = () => {
    dispatch(
      { type: 'ADD_FAVORITE', payload: music },
    );
    setFavorite(true);
  };

  const removeFavorite = () => {
    dispatch(
      { type: 'REMOVE_FAVORITE', payload: music },
    );
    setFavorite(false);
  };

  return (
    <div>
      <div className="card-music" key={ music.trackId }>
        <img src={ music.artworkUrl100 } alt="album" />
        <h4>{music.trackName}</h4>
        <audio src={ music.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {
          !favorite ? (
            <button
              type="button"
              onClick={ addFavorite }
            >
              <AiOutlineHeart className="heart" />
            </button>
          ) : (
            <button
              type="button"
              onClick={ removeFavorite }
            >
              <AiFillHeart className="heart" />
            </button>
          )
        }
      </div>

    </div>
  );
}

MusicCard.propTypes = {
  music: Proptypes.shape({
    trackId: Proptypes.number,
    trackName: Proptypes.string,
    previewUrl: Proptypes.string,
    artworkUrl100: Proptypes.string,
  }).isRequired,
};
