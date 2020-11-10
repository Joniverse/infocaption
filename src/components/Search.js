import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';

export default function Search(props) {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSetSearch(input);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleInput}
          className="search-field"
          label="Vad söker du?"
          value={input}
        />
        <IconButton type="submit">
          <SearchIcon fontSize="large" />
        </IconButton>
      </form>
    </div>
  );
}
