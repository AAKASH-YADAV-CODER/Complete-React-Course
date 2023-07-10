import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movie, setMovie] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);
  const fetchmovieHandler = useCallback(async () => {
    setisloading(true);
    seterror(null);
    try {
      const response = await fetch(
        "https://movies-d7f4e-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await response.json();
      // const transformmoviesdata = data.results.map((moviedata) => {
      //   return {
      //     id: moviedata.episode_id,
      //     title: moviedata.title,
      //     openingText: moviedata.opening_crawl,
      //     releaseDate: moviedata.release_date,
      //   };
      // });
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovie(loadedMovies);
    } catch (error) {
      seterror(error.message);
    }
    setisloading(false);
  }, []);
  useEffect(() => {
    fetchmovieHandler();
  }, [fetchmovieHandler]);
  const addmoviehandler = async (movie) => {
    const response = await fetch(
      "https://movies-d7f4e-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  let content = <p>found no Movie.</p>;
  if (Movie.length > 0) {
    content = <MoviesList movies={Movie} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isloading) {
    content = <p>loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addmoviehandler} />
      </section>
      <section>
        <button onClick={fetchmovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
