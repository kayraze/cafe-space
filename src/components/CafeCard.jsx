
import CafeLogo from '../assets/coffee-shop-logo-1.jpg'


function CafeCard() {

    return (

        <div className="cafe-card">
            <img src={CafeLogo} />
            <div>
                <h4>Cafe Bilibili</h4>
                <p>Blk 113 Lot 36 Phase 2, Mabuhay City Subd., Brgy. Mamatid, Cabuyao, Philippines</p>
            </div>
        </div>
    )

}

export default CafeCard
