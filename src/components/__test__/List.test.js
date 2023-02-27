import axios from "axios";
import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import messageEN from "../../lang/en-US.json";
import List from "../List";
import { mockCallAPiMovies, loadingList } from "./List.utils";
import { generateMovies } from "../../test/factories/movies";

describe("List Test", () => {
  const TestComponent = () => (
    <IntlProvider locale="en-US" messages={messageEN}>
      <MemoryRouter initialEntries={["/list"]}>
        <List />
      </MemoryRouter>
    </IntlProvider>
  );

  afterEach(() => {
    axios.get.mockClear();
  });

  beforeEach(() => {
    axios.get.mockClear();
    global.sessionStorage.setItem("token", "qiowAS9ndnjLKSS32LaLAPlDKL2");
  });

  test('should show loader when it"s fetching data', () => {
    const movies = generateMovies();
    mockCallAPiMovies({ responseData: movies });
    render(<TestComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("should call the movies api and show render name of movies", async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=c54b3dc47a0d780a99e28359495d0ed1&language=en-US&page=1";
    const movies = generateMovies();
    mockCallAPiMovies({ responseData: movies });
    render(<TestComponent />);
    await loadingList();
    expect(axios.get).toHaveBeenCalledWith(url);
    movies.forEach((movie) => screen.getByText(`${movie.title}...`));
  });

  test("should show '❤︎'(red heart) when the movie is included in the 'favoritesMovies' array of localStorage and '🖤'(black heart) when the movie is not included in the 'favoritesMovies' array of localStorage", async () => {
    const movies = generateMovies(1);
    global.localStorage.setItem(
      "favoritesMovies",
      `"favoritesMovies":[{id:${movies[0].id},imgUrl:https://image.tmdb.org/t/p/w500/${movies[0].poster_path},overview:${movies[0].overview},title:${movies[0].title}}]`
    );

    mockCallAPiMovies({ responseData: movies });
    const { rerender } = render(<TestComponent />);
    await loadingList();
    screen.getByText("❤︎");

    global.localStorage.setItem("favoritesMovies", `"favoritesMovies":[]`);
    rerender(<TestComponent />);
    screen.getByText("🖤");
  });
});
