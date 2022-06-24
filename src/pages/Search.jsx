import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import SearchApiResult from '../components/SearchApiResult';
import Footer from '../components/Footer';

function Search() {
  return (
    <div>
      <Header />
      <h1>Search</h1>
      <SearchInput />
      <SearchApiResult />
      <Footer />
    </div>
  );
}

export default Search;
