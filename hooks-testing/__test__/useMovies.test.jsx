import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useMovies } from "../src/hooks/useMovies";

describe("useMovies", () => {
  // Spy on teh global fetch function
  const fetchSpy = vi.spyOn(globalThis, "fetch");

  // Run before all the tests
  beforeAll(() => {
    // Mock the return value of the global fetch function
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve({ results: [{ title: "A New Hope" }] })
        ),
    };

    fetchSpy.mockReturnValue(mockResolveValue); // Faking the actual results of the api call so we dont always need to use the api.
  });

  it("Should fetch movies", async () => {
    const { result } = renderHook(() => useMovies());
    await waitFor(
      () => {
        // expect(result.current.movies).toEqual("A New Hope");
        expect(result.current.movies.results[0].title).toEqual("A New Hope");
      },
      { timeout: 1000 }
    );
  });
  //:
  // Run after all teh tests
  afterAll(() => {
    fetchSpy.mockRestore();
  });
});
