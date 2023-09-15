import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// páginas
import Home from './pages/Home.jsx';
import NewPost from './pages/NewPost.jsx';

import './index.css'

const router = createBrowserRouter([
{
  element: <App />,
  children:[
   {
    path: "/",
    element: <Home />
   },
   {
    path: "/new",
    element: <Home />
   }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
