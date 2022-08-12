import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/album.css';
import MusicCard from '../components/MusicCard';

function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    const getAlbum = async () => {
      const allResultsApiMusic = await getMusics(id);
      const filterMusics = allResultsApiMusic.filter(
        (response) => response.kind === 'song',
      );
      setMusics(filterMusics);
      setLoading(false);
    };
    getAlbum();
  }, [id]);
  // console.log(musics);

  return (
    <div>
      <Header />
      <div className="album-main-container">
        <h1>
          Album
          {'  '}
          { musics[0]?.collectionName }
        </h1>
        <h2>
          {' '}
          { musics[0]?.artistName }
          {' '}
        </h2>
        <video playsinline autoPlay muted loop id="myVideo">
          <source src="https://player.vimeo.com/external/217438952.sd.mp4?s=8f87cfbc325ee8ed2505563c880e0dc3a14d1f88&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="musics-results">
          {loading ? (<span> Carregando </span>)
            : (
              <div className="musics-results">
                {
                  musics.map((music) => (
                    <MusicCard music={ music } key={ music.trackId } />
                  ))
                }
              </div>
            )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Album;
