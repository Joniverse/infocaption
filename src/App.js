import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import GuideList from './components/GuideList';

import './App.css';

let APIStartTime;
let APIStopTime;

function App() {
  const [result, setResult] = useState();
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    APIStartTime = Date.now();
    // - - - USE THIS PROXY IF CORS IS ENABLED ON THE SERVER - - -
    // - - - https://cors-anywhere.herokuapp.com/ - - -
    axios
      .get(
        `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${searchString}&page=${page}`
      )
      .then(function (response) {
        APIStopTime = Date.now();
        console.log('API Responded in ' + (APIStopTime - APIStartTime) + 'ms');
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

  const handlePageChange = (event) => {
    event.currentTarget.getAttribute('direction') === 'next'
      ? setPage((prev) => prev + 1)
      : setPage((prev) => prev - 1);
  };

  return (
    <div className="background">
      <Header />
      <Search handleSetSearch={handleSetSearch} />
      <GuideList result={result} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
