import axios from "axios";

const APIKey = "c54b3dc47a0d780a99e28359495d0ed1";

export default class Movies {
  static async getMovies() {
    const urlEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=es-ES&page=1`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }

  static async getMovieDetail(movie_id) {
    const urlEndpoint = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=es-ES`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }

  static async getSearchMovies(keyword) {
    const urlEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=es-ES&query=${keyword}`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }
}
