
import CafeLogo from '../assets/coffee-shop-logo-1.jpg'


function CafeCard({onClick, logo, name, address}) {
    // console.log({key, logo,  name, address})
    return (
        <div className="cafe-card" onClick={onClick}>
            <div className="img-div">
                <img src={logo}  />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{address}</p>
            </div>
        </div>
    )


}

export default CafeCard
