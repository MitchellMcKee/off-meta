import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import Commander from './pages/Commander.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 chef</div>
  },
  {
    path: '/Commander',
    element: <Commander />,
    errorElement: <div>404 chef</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
