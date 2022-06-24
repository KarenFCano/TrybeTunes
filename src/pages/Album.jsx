import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';

function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // const handleFavorite = () => {
  //   if (favorite === false) {
  //     console.log('true');
  //     return setFavorite(true);
  //   }
  //   console.log('false');
  //   return setFavorite(false);
  // };

  useEffect(() => {
    setLoading(true);
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

  return (
    <div>
      <h1>
        Album
        {/* { musics[0].collectionName } */}
      </h1>
      <Header />
      { loading ? (<span> Carregando </span>)
        : (
          <div>

            {musics.map((music) => (
              <div key={ music.trackId }>
                <h4>{ music.trackName }</h4>
                <audio src={ music.previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <label className="button-label" htmlFor={ musics.trackId }>
                  <button
                    id={ music.trackId }
                    // onClick={ handleFavorite }
                    onClick={ () => setFavorite(!favorite) }
                    type="button"
                  >
                    { favorite ? (
                      <AiFillHeart className="heart" />
                    ) : (
                      <AiOutlineHeart className="heart" />
                    )}
                  </button>
                </label>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default Album;
