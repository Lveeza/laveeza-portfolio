import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
