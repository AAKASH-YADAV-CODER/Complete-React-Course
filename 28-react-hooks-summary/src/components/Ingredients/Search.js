import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../HooksCustom/http";
import ErrorModal from "../UI/ErrorModal";

const Search = React.memo((props) => {
  const [searchInputData, setsearchInputData] = useState("");
  const userInputRef = useRef();
  const { onSearchingIngredients } = props;
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (searchInputData === userInputRef.current.value) {
        const query =
          searchInputData.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchInputData}"`;
        sendRequest(
          "https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchInputData, userInputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadingData = [];
      for (const key in data) {
        loadingData.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onSearchingIngredients(loadingData);
    }
  }, [data, isLoading, error, onSearchingIngredients]);
  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading.....</span>}
          <input
            type="text"
            ref={userInputRef}
            value={searchInputData}
            onChange={(e) => setsearchInputData(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
