import { describe, expect, vi, it } from "vitest";
import { render } from "@testing-library/react";

import * as useMoviesHooks from "../src/hooks/useMovies";
import * as useSearchHooks from "../src/hooks/useSearch";
import App from "../src/App";

describe("Movies (App.js) in this case", () => {
  const useMoviesSpy = vi.spyOn(useMoviesHooks, "useMovies");
  const useSearchSpy = vi.spyOn(useSearchHooks, "useSearch");

  const items = [
    {
      title: "Star Wars",
      release_date: "1977-05-25",
      director: "George Lucas",
      opening_crawl: "It is a period of civil war.",
    },
  ];

  it("should render the app", () => {
    const items = [
      // sample places with format from api. then render the mapview
      {
        title: "Star Wars",
        release_date: "1977-05-25",
        director: "George Lucas",
        opening_crawl: "It is a period of civil war.",
      },
    ];

    useMoviesSpy.mockReturnValue({
      movies: items,
      isLoading: false,
    });

    useSearchSpy.mockReturnValue({
      searchTerm: "",
      setSearchTerm: vi.fn(),
      filteredItems: items,
    });

    // POSSIBLE DESCRIBE PLACED HERE
  });

  it("should render the app (Movies Component)", () => {
    useMoviesSpy.mockReturnValue({
      movies: items,
      isLoading: false,
    });

    useSearchSpy.mockReturnValue({
      searchTerm: "",
      setSearchTerm: vi.fn(),
      filteredItems: items,
    });

    const { getByTestId } = render(<App />);

    expect(getByTestId("movies-list").children.length).toBe(items.length);
  });

  // STASH TEST

  // STASH TEST END
});
