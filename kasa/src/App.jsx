import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "logement/:id", element: <Logement /> },
      { path: "error", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
