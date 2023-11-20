import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
