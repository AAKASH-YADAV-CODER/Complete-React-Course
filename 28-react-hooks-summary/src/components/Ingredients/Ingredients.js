import React, { useCallback, useMemo, useReducer, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "../Ingredients/IngredientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../HooksCustom/http";
const ingredientReducer = (currentingre, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.ingredients;
    case "ADD":
      return [...currentingre, action.ingredient];
    case "DELETE":
      return currentingre.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("should not get there!");
  }
};

function Ingredients() {
  const [userIngreData, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();
  const searchingHandler = useCallback((searchdata) => {
    dispatch({ type: "SEARCH", ingredients: searchdata });
  }, []);
  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);
  //Provide kr rahe hai data ko in firebase as well as list ko bhi by state
  const ingredientAddHandler = useCallback(
    (userData) => {
      sendRequest(
        "https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients.json",
        "POST",
        JSON.stringify(userData),
        userData,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );
  const ingredientDeleteHandler = useCallback(
    (ID) => {
      sendRequest(
        `https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients/${ID}.json`,
        "DELETE",
        null,
        ID,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngreData}
        onRemoveItem={ingredientDeleteHandler}
      />
    );
  }, [userIngreData, ingredientDeleteHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear} />}
      <IngredientForm
        onAddingredient={ingredientAddHandler}
        onLoading={isLoading}
      />

      <section>
        <Search onSearchingIngredients={searchingHandler} />
        {/* Need to add list here! */}
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;

/* This all done by useState hook with single state manage but above its done with multiple more advance
const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};
using in state
 const [isLoading, setisLoading] = useState(false);
 const [isError, setisError] = useState(null);
const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  //loading data
  // useEffect(() => {
  //   fetch(
  //     "https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients.json"
  //   )
  //     .then((resData) => resData.json())
  //     .then((data) => {
  //       const loadingData = [];
  //       for (const key in data) {
  //         loadingData.push({
  //           id: key,
  //           title: data[key].title,
  //           amount: data[key].amount,
  //         });
  //       }
  //       setuserIngreData(loadingData);
  //     });
  // }, []);//needs to remove because we getting two https request so this makes re-render cycle not to execute making this into infinite loop execution

 for Adding ingredients in firebase 
 // setisLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      "https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    )
      .then((resData) => {
        dispatchHttp({ type: "RESPONSE" });
        return resData.json();
      })
      .then((data) => {
        // setisLoading(false);
        // setuserIngreData((prevData) => [
        //   ...prevData,
        //   { id: data.name, ...userData },
        // ]);
        dispatch({
          type: "ADD",
          ingredient: { id: data.name, ...userData },
        });
      });


  for Deleteing
  // setisLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://ingredients-6ff09-default-rtdb.firebaseio.com/Ingredients/${ID}.json`,
      {
        method: "DELETE",
      }
    )
      .then((data) => {
        // setisLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        // setuserIngreData((prevState) =>
        //   prevState.filter((element) => element.id !== ID)
        // );
        dispatch({ type: "DELETE", id: ID });
      })
      .catch((e) => {
        // setisError(e.message);
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
        // setisLoading(false);
        // dispatchHttp({ type: "RESPONSE" });because the same state is update in error case by rest operator
      });


    For Clearing
    const clearErrorHandler = useCallback(() => {
    // setisError(null);
    dispatchHttp({ type: "CLEAR" });
  }, []);
*/
