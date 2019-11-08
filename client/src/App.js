import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const id = ''
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = '/' component = { MovieList } />
      {/* <Route path ='/movies/:id' component = { Movie }/> */}
      <Route
        exact
        path='/movies/:id'
        render={props => (
          <Movie
            // this is the same thing as doing:
            // match={props.match}
            // location={props.location}
            // history={props.history}
            {...props}
          />
        )}
      />
        
    </div>
  );
};

export default App;
