'use strict';

class AppBackend {
  constructor(){
    this.base = 'https://mmdb-backend.now.sh/';
  }

  _parseJson(response){
    return response.json();
  }

  getMovies(){
    const url = `${this.base}/movies`;
    return fetch(url).then(this._parseJson);
  }

  getMovie(id){
    const url = `${this.base}/movies/${id}`;
    return fetch(url).then(this._parseJson);
  }

  addMovie(data){
    const url = `${this.base}/movies`;
    return fetch(url,{
      method: 'POST',
      body: JSON.stringify(data)
    }).then(this._parseJson);
  }

  editMovie(id,data){
    const url = `${this.base}/movies/${id}`;
    return fetch(url,{
      method: 'PUT',
      body: JSON.stringify(data)
    }).then(this._parseJson);
  }

  deleteMovie(id){
    const url = `${this.base}/movies/${id}`;
    return fetch(url,{
      method: 'DELETE'
    }).then(this._parseJson);
  }
}

export const Backend = new AppBackend();
