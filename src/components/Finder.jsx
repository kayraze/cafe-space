import Header from './Header.jsx'
import { useState, useEffect } from 'react'
import Background from '../assets/finder-background.jpg'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import CafeCard from './CafeCard.jsx'

function Finder() {

    let map;
    const googleLib = ['places']
    let placesBuffer = []
    const [places, setPlaces] = useState([])
    let [center, setCenter] = useState({ lat: 0, lng: 0})
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );
    const [selectedPlace, setSelectedPlace] = useState(places[0] ? places[0] : {
        name: "None"
    });
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
    function markPlace(map, position, title) {
        const markerPosition = new google.maps.LatLng(position.lat, position.lng)
        new google.maps.Marker({
            position: position,
            map: map,
            title: title
        })
    }

    function initMap() {   
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position =>{
                    const coords = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setCenter(coords)
                    map = new google.maps.Map(
                        document.getElementsByClassName("cafe-map-div")[0],
                        { 
                            center: center,
                            zoom: 16
                        }
                    )
                    const service = new google.maps.places.PlacesService(map)
                    resolve({map, service, coords})
                })           
            } else {
                console.log("navigator.geolocation is not available")
            }
        })
    }
    function handleCardClick(place) {
        console.log(place.latLng);
        if (map) {
            
            map.setCenter(new google.maps.LatLng(place.latLng.lat, place.latLng.lng))
        } else {
            map = new google.maps.Map(
                document.getElementsByClassName("cafe-map-div")[0],
                { 
                    center: place.latLng,
                    zoom: 16
                }
            )
            
        }
        markPlace(map, place.latLng, place.name)
        setSelectedPlace(places[place.id]);
    }
    useEffect(() => {
        const runMap = async () => {
            const { map, service, coords } = await initMap()
        
            const request = {
                location: map.center,
                radius: 5000,
                type: ['cafe']
            }

            const callback = (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    let count = 0;
                    // console.log(results[0])
                    results.forEach(place => {
                        console.log(place.geometry.location.lat()
                        )
                        placesBuffer.push({
                            id: count,
                            rating: place.rating,
                            logo: place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : place.icon,
                            name: place.name,
                            address: place.vicinity,
                            latLng: { 
                                lat: place.geometry.location.lat(), 
                                lng: place.geometry.location.lng() 
                            },
                        })
                        markPlace(map, placesBuffer[count].latLng, placesBuffer[count].name)
                        count++;

                    })
                    setPlaces(placesBuffer)
                    placesBuffer = []
                }
            }

            service.nearbySearch(request, callback);
        }
        runMap()
        console.log("RUNBNB")
    }, [])  

    
    return (
        <>
            <div className="finder">
                <img src={Background} className="background" />
                <div className="opacity" />
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
                            {places.map(place => (
                                <CafeCard onClick={() => handleCardClick(place)} key={place.id} logo={place.logo} name={place.name} address={place.address} />
                            ))}
                        </div>
                    </div>
                    <div className="cafe-details">
                        <h1>{selectedPlace.name}</h1>
                        <div className="cafe-information">
                            <p>Address: {selectedPlace.address}</p>
                            <p>Rating: {selectedPlace.rating}</p>
                        </div>

                        <div className="cafe-map-div">
    


                                
                        </div>
                        
                        <div>
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque adipisci sunt quasi temporibus distinctio molestiae omnis, at facere architecto, dolor, eius quidem asperiores incidunt in facilis ut eum! Magni dolorem eos explicabo omnis eligendi? Vel quos provident, quisquam impedit in eligendi eius, libero ab quis quod error, dolore id.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Finder
