import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Marketplace from "./pages/Marketplace";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/marketplace",
    Component: Marketplace,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
