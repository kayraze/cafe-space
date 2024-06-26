import { createBrowserRouter } from 'react-router-dom'

import App from '../App.jsx'
import Home from './Home.jsx'
import Finder from './Finder.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/finder', element: <Finder /> },
])
