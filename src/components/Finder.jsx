import Header from './Header.jsx'
import { useState } from 'react'
import Background from '../assets/finder-background.jpg'


function Finder() {
 
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );

    function handleChange(event) {
        const { id, value } = event.target;
        console.log(`${id}: ${value}`)
        setFormData( prevState => ({ ...prevState, [id]: value }))
    }

    
    function handleSubmit(event) {
        event.preventDefault();

        setFormData(
            {
                name: "",
                email: "",
                message: ""
            }
        )
    }
    return (
        <>
            <div className="finder">
                <img src={Background} className="background" />
                <Header />
                <form className="find-div" onSubmit={event => handleSubmit(event)}>
                    <div className="input-div search-div">

                        <label htmlFor="search">Search</label>
                        <input
                            type="text"
                            id="search"
                            value={formData.search}
                            onChange={event => handleChange(event)}
                            required
                        />
                    </div>
                    <div className="input-div radius-div">

                        <label htmlFor="radius">Radius</label>
                        <input
                            type="text"
                            id="radius"
                            value={formData.radius}
                            onChange={event => handleChange(event)}
                            required
                        />
                    </div>
                    <div className="input-div area-div">

                        <label htmlFor="area">Area</label>
                        <input
                            type="text"
                            id="area"
                            value={formData.area}
                            onChange={event => handleChange(event)}
                            required
                        />
                    </div>
                </form>
            </div>

            <div className="sidebar">
                <div className="sidebar-sort-div">
                    <h3>Sort By</h3>
                    <span>Nearest</span>
                </div>
                <div className="cafe-card">
                    <img src={} />
                </div>
            </div>
        </>
    )
}

export default Finder
