import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../styles/pages/search.css';

function SearchInput() {
  const { searchField } = useSelector(({ reducer }) => (reducer));
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchAlbumsAPI(searchField)
      .then((apiReturn) => setResults(apiReturn))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, [searchField]);

  console.log(result[0]);

  return (
    <section className="results-container">
      <div>
        <h1>
          Resultados da busca por:
          {' '}
          {searchField}
        </h1>
      </div>
      <div>
        {loading
          ? (<span> Carregando </span>)
          : (
            <div className="results-content">
              {result.map((resultApi) => (
                <div className="results-card" key={ resultApi.collectionId }>
                  <Link to={ `/album/${resultApi.collectionId}` }>
                    <img
                      src={ resultApi.artworkUrl100 }
                      alt={ resultApi.collectionName }
                    />
                    <h4>{ resultApi.artistName }</h4>
                    <h4>{ resultApi.collectionName }</h4>
                  </Link>
                </div>
              ))}
            </div>
          )}
      </div>
    </section>
  );
}

export default SearchInput;
