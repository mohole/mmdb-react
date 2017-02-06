'use strict';

import React from 'react';
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
      <section>

      </section>
    )
  }
}
