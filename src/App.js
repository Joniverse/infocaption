import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import GuideList from './components/GuideList';

import './App.css';

function App() {
  const [result, setResult] = useState();
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState('');

  // https://cors-anywhere.herokuapp.com/

  useEffect(() => {
    console.log('Started fetching');
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${searchString}&page=${page}`
      )
      .then(function (response) {
        console.log('Finished fetching');
        setResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [searchString, page]);

  const handleSetSearch = (string) => {
    setSearchString(string);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="background">
      <Header />
      <Search handleSetSearch={handleSetSearch} />
      <GuideList
        result={result}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default App;
