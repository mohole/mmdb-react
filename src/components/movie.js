'use strict';

import React from 'react';

export default class Movie extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="col-xs-4">
        <div className="card">
          <img className="card-img-top" width="100%" height="200"
            src="poster" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">title</h4>
            <p className="card-text">year</p>
            <button className="btn btn-danger"
              data-id="id" onclick="deleteMovie(event)">
                Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}
