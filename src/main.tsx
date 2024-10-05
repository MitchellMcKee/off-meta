import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import Commander from './pages/Commander.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 chef</div>
  },
  {
    path: '/commander/:commanderName',
    element: <Commander />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <div className='footer'>
        <p>&nbsp; Data provided by <a href="https://topdeck.gg" target="_blank">TopDeck.gg</a></p>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
)