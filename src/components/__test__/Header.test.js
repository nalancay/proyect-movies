import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import messageEN from "../../lang/en-US.json";
import ApiAccount from "../../api/account";

describe("Header Test", () => {
  const TestComponent = ({ token = null }) => (
    <IntlProvider locale="en-US" messages={messageEN}>
      <MemoryRouter initialEntries={["/"]}>
        <Header token={token} />
      </MemoryRouter>
    </IntlProvider>
  );

  test("Should display 'Log in' in text in header when token is null", () => {
    const ApiAccountSpy = jest.spyOn(ApiAccount, "getTokenUser");
    render(<TestComponent token={null} />);
    expect(ApiAccountSpy).not.toBeCalled();
    const textLogin = screen.getByText("Log in");
    expect(textLogin).toBeInTheDocument();
  });

  test("should not show 'Movies', 'Favorites' and 'Logout' sections in header when not receiving a token from the user", () => {
    const ApiAccountSpy = jest.spyOn(ApiAccount, "getTokenUser");
    render(<TestComponent token={null} />);
    expect(ApiAccountSpy).not.toBeCalled();
    const textLogout = screen.queryByText("Logout");
    const textMovies = screen.queryByText("Movies");
    const textFavorites = screen.queryByText("Favorites");

    expect(textLogout).not.toBeInTheDocument();
    expect(textMovies).not.toBeInTheDocument();
    expect(textFavorites).not.toBeInTheDocument();
  });

  test("should show the 'Movies ', 'Favorites' and 'Logout' sections in the header when it receives a token from the user", () => {
    const token = faker.random.word(1);
    render(<TestComponent token={token} />);
    const textMovies = screen.getByText("Movies");
    const textFavorites = screen.getByText("Favorites");
    const textLogout = screen.getByText("Logout");

    expect(textMovies).toBeInTheDocument();
    expect(textFavorites).toBeInTheDocument();
    expect(textLogout).toBeInTheDocument();
  });
});
