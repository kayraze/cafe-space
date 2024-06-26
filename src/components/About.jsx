
import Header from './Header.jsx'
import Background from '../assets/about-background.jpg'
import Divider from '../assets/about-divider.png'

function About() {

    return (
        <>
            <div id="about" className="about">
                <div className="about-top-buffer"></div>
                <img src={Divider} className="divider" />
                <img src={Background} className="background" />
                <div className="content">
                    <h1 className="title">About Us</h1>
                    <p>Welcome to cafe-space, your ultimate destination for discovering cozy cafes around you. Whether you&#39;re a coffee enthusiast, a digital nomad in search of the perfect workspace, or simply looking to unwind with a cup of your favorite brew, we&#39;re here to guide you.
                    <br/><br/>
    At cafe-space, we understand the importance of finding that ideal spot where the aroma of freshly brewed coffee meets the comfort of a welcoming atmosphere. Our mission is to connect you with the best cafes in your vicinity, ensuring every outing is a delightful experience.
    Explore our carefully curated listings to discover a variety of cafes offering everything from artisanal coffees to delectable pastries. We provide detailed information, including location, opening hours, specialties, and customer reviews, so you can choose the perfect spot with confidence.
                    <br/><br/>

    Whether you&#39;re exploring a new city or looking for a hidden gem in your neighborhood, cafe-space is your go-to resource. Join us on a journey of discovering delightful cafes, one cup at a time.
    Thank you for visiting cafe-space. Cheers to good coffee and great company!</p>
                </div>


                <div className="small-content">
                    <h1 className="title">About Us</h1>
                    <p>Welcome to cafe-space, your ultimate destination for discovering cozy cafes around you. Whether you&#39;re a coffee enthusiast, a digital nomad in search of the perfect workspace, or simply looking to unwind with a cup of your favorite brew, we&#39;re here to guide you.
                    <br/><br/>
    At cafe-space, we understand the importance of finding that ideal spot where the aroma of freshly brewed coffee meets the comfort of a welcoming atmosphere. Our mission is to connect you with the best cafes in your vicinity, ensuring every outing is a delightful experience.
    Explore our carefully curated listings to discover a variety of cafes offering everything from artisanal coffees to delectable pastries. We provide detailed information, including location, opening hours, specialties, and customer reviews, so you can choose the perfect spot with confidence.
                    <br/><br/>
    Whether you&#39;re exploring a new city or looking for a hidden gem in your neighborhood, cafe-space is your go-to resource. Join us on a journey of discovering delightful cafes, one cup at a time.
    Thank you for visiting cafe-space. Cheers to good coffee and great company!</p>
                </div>
        
            </div>
        </>
    )
}

export default About
