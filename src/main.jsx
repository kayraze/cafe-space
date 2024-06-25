import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/general.css'
import './styles/header.css'
import './styles/home.css'
import './styles/finder.css'
import './styles/about.css'
import './styles/contact.css'

import { RouterProvider } from 'react-router-dom' 
import { router } from './components/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
