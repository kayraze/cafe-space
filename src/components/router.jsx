import { createBrowserRouter } from 'react-router-dom'

import Home from './Home.jsx'
import Finder from './Finder.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/finder', element: <Finder /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
])
