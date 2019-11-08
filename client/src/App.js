import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const id = '1'
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = '/' component = { MovieList } />
      <Route path ={`/movies/${id}`} component = { Movie }/>
    </div>
  );
};

export default App;
