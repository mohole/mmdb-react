'use strict';

import React from 'react';
import Movie from './movie';
import {Backend} from './../backend';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      formData: {}
    }

    Backend.getMovies().then((json) => {
      console.log(json);
      const data = json.length ? json : [];
      this.setState({
        movies: data
      });
    });
  }

  render(){
    return (
      <section className="row">
        { this.state.movies.map((e,i) => {
            return <Movie key={i} />;
        }) }
      </section>
    )
  }
}
