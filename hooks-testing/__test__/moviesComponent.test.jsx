import { describe, expect, vi, it } from "vitest";
import { render, renderHook, waitFor } from "@testing-library/react";

import * as useMoviesHooks from "../src/hooks/useMovies";
import { useMovies } from "../src/hooks/useMovies";
import * as useSearchHooks from "../src/hooks/useSearch";
import { App } from "../src/App";

describe("Movies", () => {
  const useMoviesSpy = vi.spyOn(useMoviesHooks, "useMovies");
  const useSearchSpy = vi.spyOn(useSearchHooks, "useSearch");

  it("should render the app", () => {
    const items = [
      {
        title: "Star Wars",
        release_date: "1977-05-25",
        director: "George Lucas",
        opening_crawl: "It is a period of civil war.",
      },
    ];

    useMoviesSpy.mockReturnValue({
      movies: items,
    });

    useSearchSpy.mockReturnValue({
      searchTerm: "",
      setSearchTerm: vi.fn(),
      filteredItems: items,
    });
  });

  // NEW TEST

  it("Should render the list of movies", () => {
    const { result } = renderHook(() => useMovies(""));
    // const items = useSearchHooks.filteredItems;

    const solution = async () => {
      const { result } = renderHook(() => useMovies());
      await waitFor(() => {
        // expect(result.current.movies).toEqual("A New Hope");
        // expect(result.current.movies.results[0].title).toEqual("A New Hope");
        return result.current.movies.results;
      });
    };

    const { getByTestId } = render(<App />);
    expect(getByTestId("movies-list").children.length).toBe(solution.length);
  });
});
