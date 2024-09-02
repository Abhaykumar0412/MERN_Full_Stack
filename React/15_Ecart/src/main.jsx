import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./16_Component/Profile.jsx";
import Cart from "./16_Component/Cart.jsx";
import Home from "./16_Component/Home.jsx";
import ProductPage from "./16_Component/ProductPage.jsx";
import ErrorPage from "./16_Component/ErrorPage.jsx";
import ThemeContext from "./16_Component/ThemeContext.jsx"
import AppStore from "./21_Store/Store.js"
import { Provider } from "react-redux"
let Food = lazy(() => import("./16_Component/Food.jsx"))

let AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/food",
        element: (<Suspense fallback={<h1>Food page is comming</h1>}><Food></Food></Suspense>)
      },
      {
        path: "/product/:id",
        element: <ProductPage></ProductPage>
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={AppStore}>
    <ThemeContext>
      <RouterProvider router={AppRouter}></RouterProvider>
    </ThemeContext>
  </Provider>
);