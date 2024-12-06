import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css'
import App from './App.tsx'
import Home from './pages/Home/index.tsx';
import Experience from './pages/Exp/index.tsx';
import Certificate from './pages/Certs/index.tsx';
import Skill from './pages/Skill/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "experience",
        element: <Experience/>
      },
      {
        path: "skills",
        element: <Skill/>
      },
      {
        path: "certificate",
        element: <Certificate/>
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
