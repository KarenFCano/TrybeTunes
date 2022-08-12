import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import '../styles/pages/favorites.css';
import '../styles/pages/album.css';

function Favorites() {
  const { favorites } = useSelector(({ reducer }) => (reducer));
  const [loading, setLoading] = useState(false);
  console.log(setLoading);

  return (
    <div>
      <Header />
      <div className="favorites-results">
        <h1>Favorites</h1>
        <video playsinline autoPlay muted loop id="myVideo">
          <source src="https://player.vimeo.com/external/412908231.sd.mp4?s=dc05c24eddd7f734dc3ebc68331763a4aa73559b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="favorites-cards">
          {loading ? (<span> Carregando </span>)
            : (
              <div>
                {
                  !favorites.length ? (<h2>Não existem músicas favoritadas</h2>)
                    : (
                      favorites.map((music) => (
                        <MusicCard music={ music } key={ music.trackId } />
                      ))
                    )
                }
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
