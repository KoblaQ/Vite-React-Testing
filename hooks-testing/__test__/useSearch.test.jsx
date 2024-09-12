import { expect, it, describe } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSearch } from "../src/hooks/useSearch";

describe("useSearch", () => {
  it("Should return a default search term and original items", () => {
    const items = { results: [{ title: "Star Wars" }] };
    const { result } = renderHook(() => useSearch(items)); // Basically uses the renderHook function to simulate running the useSearch component. Test the hooks that are used in the useState.
    // Initially it is empty because it hasnt been run.

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredItems).toEqual(items.results);
  });

  //  Testing if the hook works when we update the searchTerm by using the act() method to simulate the setSearchTerm.

  it("should return a filtered list of items", () => {
    const items = { results: [{ title: "Harry Potter" }, { title: "Eragon" }] };

    const { result } = renderHook(() => useSearch(items));

    act(() => {
      result.current.setSearchTerm("Potter");
    });

    expect(result.current.searchTerm).toBe("Potter");
    expect(result.current.filteredItems).toEqual([{ title: "Harry Potter" }]);
  });
});
