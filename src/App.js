
import './App.css';
import Header from './Header/Header';
import Login from './Components/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Streamlining Healthcare. Empowering Patients.</div>,
    },
    {
      path: "/Login",
      element: <div><Login/></div>,
    },
  ]);
  return (
    <div className="App">
      <Header/> 
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
