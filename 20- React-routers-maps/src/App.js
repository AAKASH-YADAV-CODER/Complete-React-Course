import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Secondcom from "./components/Secondcom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import ProductsDetail from "./components/ProductsDetail";
// const routeralternative = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="product" element={<Secondcom />} />
//   </Route>
// )
// const router = createBrowserRouter(routeralternative);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product', element: <Secondcom /> },
      { path: '/product/:product', element: <ProductsDetail /> },
    ]
  },

])
function App() {
  return <RouterProvider router={router}>

  </RouterProvider>;
}


export default App;
