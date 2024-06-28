
import CafeLogo from '../assets/coffee-shop-logo-1.jpg'


function CafeCard(prop) {

    return (

        <div className="cafe-card">
            <img src={CafeLogo} />
            <div>
                <h4>{prop.name}</h4>
                <p>{prop.address}</p>
            </div>
        </div>
    )

}

export default CafeCard
