import range from "lodash/range";
import { faker } from "@faker-js/faker";

const generateMovie = () => {
  return {
    id: faker.datatype.uuid(),
    title: faker.random.word(1),
    overview: faker.lorem.lines(1),
    poster_path: `/${faker.random.word(1)}.jpg`,
  };
};

export const generateMovies = (numberOfMovies = 5) =>
  [...range(numberOfMovies)].map((n) => generateMovie());
