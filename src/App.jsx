
import Header from './components/Header.jsx'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'


function App() {

    return (
    
        <div style={{
            display: "flex",
            flexDirection: "column",
        }} >
            <Header />
            <Home />
            <About />
            <Contact />
        </div>

    )

}


export default App
