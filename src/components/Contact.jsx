import { useState } from 'react'
import Background from '../assets/contact-background.jpg'
import Map from '../assets/contact-map-2.png'
import Divider from '../assets/contact-divider.png'

function Contact() {

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
            <div id="contact" className="contact">
                <img src={Background} className="background" />
                    <div className="content">    
                        <img src={Divider} className="divider" />
                        <div className="contact-form" >
                            <h1>Contact Us</h1>
                            <form  onSubmit={event => handleSubmit(event)}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={event => handleChange(event)}
                                    required
                                />


                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={event => handleChange(event)}
                                    required
                                />

                                <label htmlFor="name">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={event => handleChange(event)}
                                    rows={8}
                                    required
                                />
                                <input id="submit" type="submit" value="Submit" />

                            </form>
                        </div>



                        <div className="contact-details">
                            <h1>Details</h1>
                            <h3>Email: cafespace@gmail.com</h3>
                            <h3>Phone #: 09286967236</h3>
                            <h3>Address: Ph 5, Blk 9, Lot 16, Mamatid City, Cabuyao, Laguna, Philippines</h3>
                            <div id="map-div">
                                <img src={Map} />
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}


export default Contact
