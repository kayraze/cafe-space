import Header from './Header.jsx'
import { useState, useEffect } from 'react'
import Background from '../assets/finder-background.jpg'
import CafeCard from './CafeCard.jsx'

function Finder() {
 
    const [places, setPlaces] = useState({})
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
    async function initMap() {
        return new Promise((resolve, reject) => {
            const myLatLng = { lat: 14.242776, lng: 121.164856 };
            const map = new google.maps.Map(document.getElementsByClassName("cafe-map-div")[0], {
                center: myLatLng,
                zoom: 16,
            });

            const service = new google.maps.places.PlacesService(map);
            resolve({ map, service });
        });
    }

    async function markPlace(results, status, map) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                const marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                });
            });
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { map, service } = await initMap();

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const location = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };

                        const radius = 5000;

                        const request = {
                            location: location,
                            radius: radius,
                            type: ['cafe']
                        };

                        service.nearbySearch(request, (results, status) => {
                            markPlace(results, status, map);
                        });
                    });
                } else {
                    console.log("Geolocation is not supported by this browser.");
                }
            } catch (error) {
                console.error("Error initializing map:", error);
            }
        };

        fetchData();

    }, []);

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
                <div className="finder-content">
                    <div className="sidebar-div">
                        <div className="sort-div">
                            <h3>Sort By</h3>
                            <span>Nearest</span>
                        </div>

                        <div className="sidebar">
                            <CafeCard />
                            <CafeCard />
                            <CafeCard />
                            <CafeCard />
                            <CafeCard />
                        </div>
                    </div>
                    <div className="cafe-map-div">
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Finder
