
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
      element: <div id="subheader-container">Streamlining Healthcare. Empowering Patients.</div>,
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
      <div id="image-container">
      <img src={require("./Images/Blue_Sky_with_Clouds.jpg")} alt='Blue Sky with Clouds'/>
      </div>
    </div>
  );
}

export default App;
