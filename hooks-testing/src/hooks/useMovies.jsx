import { useState, useEffect } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      // console.log(data);
      // setMovies(data.results[0].title);
      setMovies(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading };
}

// TYPESCRIPT VERSION BELOW

// export const useMovies = ():{ movies: Movie[], isLoading: boolean, error: any } => {
//     const [movies, setMovies] = useState([]);

//     const fetchMovies = async () => {
//         try {
//             setIsLoading(true);
//             const response = await fetch("https://swapi.dev/api/films");

//             if (!response.ok) {
//                 throw new Error("Failed to fetch movies");
//             }

//             const data = await response.json();
//             setMovies(data.results);
//         } catch (err) {
//         //do something
//         } finally {
//         //do something
//         }
//     };

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     return { movies }
// }
