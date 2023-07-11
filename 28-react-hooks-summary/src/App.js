import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./context/auth-context";
import { useContext } from "react";
function App(props) {
  const authcontxt = useContext(AuthContext);
  let Content = <Auth />;
  if (authcontxt.isAuth) {
    Content = <Ingredients />;
  }
  return Content;
}

export default App;
