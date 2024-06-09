import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Home from "./pages/Home";
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {index : true, element : <Home />},
      {path : 'videos' , element : <Videos />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
