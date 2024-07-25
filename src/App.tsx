// @ts-nocheck
import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const SecondPage = () => (
  <div>
    <h1>Second Page</h1>
    <Link to="/">
      <button>Go to Home Page</button>
    </Link>
    <div style={{ marginTop: "2000px" }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tincidunt arcu vel orci tempor, nec luctus leo blandit. Donec vel libero
        at lectus rutrum vestibulum vitae ut turpis. Mauris varius risus sit
        amet magna fringilla, et vestibulum nisi interdum. Sed vulputate feugiat
        nisl, eu dapibus magna. Integer id viverra lacus, et blandit lorem.
        Praesent bibendum commodo mauris, et fermentum urna tempor non. Morbi
        nec faucibus ligula. Nulla facilisi. Sed bibendum mi non risus commodo,
        in placerat ante vulputate. In malesuada nisl et tincidunt suscipit.
        Integer ultricies mauris metus, a efficitur ex vehicula sit amet.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nam ut lacus augue.
      </p>
      <p>
        Vestibulum ac orci non purus sollicitudin suscipit. Maecenas ornare
        velit ac turpis sollicitudin, et ultricies odio elementum. Nulla
        facilisi. Praesent blandit vel ex nec ullamcorper. Donec ultricies
        malesuada odio, nec faucibus libero. Duis lacinia vestibulum fermentum.
        Cras hendrerit eros nec mi convallis consequat.
      </p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/second",
    element: <SecondPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
