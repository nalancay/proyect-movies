import axios from "axios";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";

export const mockCallAPiMovies = ({ responseData = [] }) =>
  axios.get.mockResolvedValueOnce({
    data: {
      results: responseData,
    },
  });

export const loadingList = () =>
  waitForElementToBeRemoved(screen.queryByText(/loading/i));
