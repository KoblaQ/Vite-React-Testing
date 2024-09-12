//hooks/useSearch.jsx
import { useState, useMemo } from "react";

export function useSearch(items) {
  let moviesList = items.results;
  const [searchTerm, setSearchTerm] = useState("");
  // items.edem = "EDEM Q";
  // const searchValues = items.results;
  // console.log("DEBUG HERE");
  // console.log(moviesList);
  //  Convert items value to a
  const filteredItems = useMemo(
    () =>
      // items.filter((movie) =>
      moviesList?.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, moviesList]
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
}

// TYPESCRIPT VERSION BELOW

//hooks/useSearch.ts

// import { useState, useMemo } from "react";

// export const useSearch = (items: any[]) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const filteredItems = useMemo(
//             () => items.filter(
//                 movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//         , [items, searchTerm]);

//     return {
//         searchTerm,
//         setSearchTerm,
//         filteredItems
//     };
