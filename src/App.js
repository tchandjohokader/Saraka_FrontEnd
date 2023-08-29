import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pageaccueil from './Page/Accueil';
import Apropos from './Page/Apropos';
import Connection from './Page/Connection';
import Faireundon from './Page/Faireundon';
import Monprofile from './Page/Monprofile';
import Pagededon from './Page/Pagededon';
import  Inscription  from './Page/Inscription';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Pageaccueil/>,
  },
  {
    path: "/A_propos",
    element: <Apropos/>,
  },
  {
    path: "/Faire_un_don",
    element: <Faireundon/>,
  },
  {
    path: "/Mon_compte",
    element: <Monprofile/>,
  },
  {
    path: "/Connection",
    element: <Connection/>,
  },
  {
    path: "/Inscription",
    element: <Inscription/>,
  },
  {
    path: "/:id",
    element: <Pagededon/>,
  }
  ]);


function App () {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

