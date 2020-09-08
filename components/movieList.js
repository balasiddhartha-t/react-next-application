
import React from 'react';

class MovieList extends React.Component{

    shorten = (text) => {
      if(text && text.length >200){
        return text.substr(0,200) + '...'
      }
      return text
    }
    renderMovies(movies){
      const movieElements = movies.map(movie => 
        (
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
              <img className="card-img-top" src={movie.image} alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                <a href="#">{movie.name}</a>
                </h4>
                <p className="card-text">{this.shorten(movie.description)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Rating: {movie.rating} </small>
              </div>
            </div>
          </div>
        )
        )
      return movieElements
      }

    render(){
      const {movies} = this.props;
        return(
        <React.Fragment>
        {this.renderMovies(movies)}
        </React.Fragment>
        )
    }
}


export default MovieList;