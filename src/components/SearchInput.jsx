import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/pages/search.css';

function SearchInput() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const [btnDisable, setBtnDisable] = useState(true);

  const handleSearch = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_FIELD', payload: search });
    setSearch('');
  };

  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  useEffect(() => {
    const MIN_LENGTH = 2;
    if (search.length >= MIN_LENGTH) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    // console.log(nome);
  }, [search]);

  return (
    <div>
      <form onSubmit={ handleSearch }>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            value={ search }
            onChange={ handleChangeSearch }
            placeholder="Digite sua busca"
          />
        </label>
        <button
          type="submit"
          disabled={ btnDisable }
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
