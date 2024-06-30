import Header from './Header.jsx'
import { useState, useEffect } from 'react'
import Background from '../assets/finder-background.jpg'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import CafeCard from './CafeCard.jsx'

function Finder() {

    let map;
    let service;
    const [places, setPlaces] = useState([])
    const [center, setCenter] = useState({ lat: 14.241246, lng: 121.149716})
    // const [center, setCenter] = useState(getCurrentPosition())
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );
    const coords = { lat: 14.241246, lng: 121.149716}
    useEffect(() => {
      const run = async () => {
        const map = new google.maps.Map(
          document.getElementsByClassName("cafe-map-div")[0],
          {
            center: coords,
            zoom: 14
          }
        )
        renderSidebar()

      }
      run()
  
  
  
    }, [])

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
    function markPlace(position, title) {
        const markerPosition = new google.maps.LatLng(position.lat, position.lng)
        new google.maps.Marker({
            position: position,
            map: map,
            title: title
        })
    }
    function getCurrentPosition() {
        let coords = { lat: 0, lng: 0 };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                coords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            })
        } else {
            console.log("[-] getPosition Failed")
        }
        return coords
    }
    function renderMap(position) {   
    
        return new Promise((resolve, reject) => {
            console.log("MAP")
            map = new google.maps.Map(
                document.getElementsByClassName("cafe-map-div")[0],
                { 
                    center: position,
                    zoom: 16
                }
            )
            service = new google.maps.places.PlacesService(map)
            resolve({ map, service })
            console.log("MAP FINISHED")
        })
    }


    async function renderSidebar() {
        const { map, service } = await renderMap(center)
        const request = {
            location: center, // assuming center is defined elsewhere
            radius: 5000,
            type: ['cafe']
        };
        
        const callback = (results, status) => {
            try {
                    console.log("CALLBACK")

                    const placesBuffer = results.map((place, index) => ({
                        id: index,
                        rating: place.rating,
                        logo: place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : place.icon,
                        name: place.name,
                        address: place.vicinity,
                        latLng: { 
                            lat: place.geometry.location.lat(), 
                            lng: place.geometry.location.lng() 
                        }
                    }));
                    
                    placesBuffer.forEach(place => {
                        markPlace(place.latLng, place.name);
                    });
                    
                    setPlaces(placesBuffer);
                    setSelectedPlace(placesBuffer[0])
            } catch (error) {
                console.log(error)
            }
        };
        
        service.nearbySearch(request, callback);
        
    }

    function handleCardClick(place) {
        setSelectedPlace(place)
        renderMap(place.latLng)
        markPlace(place.latLng, place.name)
    }
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
                        <div className="heading">
                            <img className="logo" src={selectedPlace.logo} />
                            <h1>{selectedPlace.name}</h1>
                        </div>

                        <div className="cafe-information">
                            <p>Address: {selectedPlace.address}</p>
                            <p>Rating: {selectedPlace.rating}</p>
                        </div>
                        <div className="cafe-map-div"></div>
                        
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
