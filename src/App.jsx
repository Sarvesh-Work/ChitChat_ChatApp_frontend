import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import SignUp from "./pages/SignUp.jsx";
import Protected from "./components/auth/Protected.jsx";

// routes Imports
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Groups = lazy(() => import("./pages/Login.jsx"));
const Messages = lazy(() => import("./pages/Messages"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"))




// routes Imports





function App() {

  const user = true
  const router = createBrowserRouter([
    {

      element: <Protected user={user} redirect="/login" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/groups",
          element: <Groups />,
        },
        {
          path: "/messages/:id",
          element: <Messages />,
        },

      ]
    },
    {

      element: <Protected user={!user} redirect="/" />,
      children: [

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },

      ]
    },
    {
      path: "*",
      element: <PageNotFound />

    }



  ]);


  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App