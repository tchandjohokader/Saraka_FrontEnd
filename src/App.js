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
<<<<<<< HEAD
=======
import  Inscription  from './Page/Inscription';

>>>>>>> bbae662877e60b4404fb819f4b3a54ca05fa65ee


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
<<<<<<< HEAD
    path: "/M",
    element: <Pagededon/>,
  },
=======
    path: "/Inscription",
    element: <Inscription/>,
  },
  {
    path: "/M",
    element: <Pagededon/>,
  }
>>>>>>> bbae662877e60b4404fb819f4b3a54ca05fa65ee
  ]);


function App () {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

