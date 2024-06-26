import Header from './Header.jsx'
import Background from '../assets/background.jpg'
import Divider from '../assets/home-divider.png'

function Home() {

        // return (
        //
        //     <>
        //         <div className="home">
        //             <Header />
        //         </div>
        //     </>
        //
        // )

        return(
            <>
                <div className="home">
                    <img src={Background} className="background" />
                    <div className="content">
                        <h1>Cafe-Space</h1>
                        <p><q>Discover Your Perfect Brew, <br/>Find the most convenient cafe for you.</q> <br/>with cafe space</p>
                    </div>
                    <div className="background-opacity" />
                    <img src={Divider} className="divider"/>
                </div>
            </>
        )
}

export default Home
