import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import SearchApiResult from '../components/SearchApiResult';
import Footer from '../components/Footer';
import '../styles/pages/search.css';

function Search() {
  const { searchField } = useSelector(({ reducer }) => (reducer));
  return (
    <div>
      <Header />
      <div className="search-container">
        <section className="search-title">
          <h1>Search</h1>
        </section>
        <SearchInput />
      </div>
      {searchField && <SearchApiResult />}
      <Footer />
    </div>
  );
}

export default Search;
