import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Statpage from './pages/Statpage.jsx'
import Homepage from './pages/Homepage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <NotFoundPage />
  },
  {
    path:'/stats',
    element: <Statpage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
