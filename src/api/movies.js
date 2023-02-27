import axios from "axios";

const APIKey = "c54b3dc47a0d780a99e28359495d0ed1";

export default class Movies {
  static async getMovies({ language }) {
    const urlEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=${language}&page=1`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }

  static async getMovieDetail({ language, movie_id }) {
    const urlEndpoint = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=${language}`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }

  static async getSearchMovies({ language, keyword }) {
    const urlEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=${language}&query=${keyword}`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }
}
