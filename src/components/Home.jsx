import Header from './Header.jsx'
import Divider from '../assets/home-divider.png'

function Home() {

        return(
            <>
                <Header /> 
                <div className="home">
                    <h1>HOME</h1>
                    
                    <img src={Divider} className="divider"/>
                </div>
            </>
        )
}

export default Home
