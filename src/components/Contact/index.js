import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_u60chr9', 'template_due87rk', form.current, 'fUWOcvR0jEtAhg_2H')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <label className='form-labels'>Name</label>
                  <input placeholder=" " type="text" name="name" required />
                </li>
                <li className="half">
                <label className='form-labels'>Email*</label>
                  <input
                    placeholder=" "
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                <label className='form-labels'>Subject</label>
                  <input
                    placeholder=" "
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                <label className='form-labels'>Message</label>
                  <textarea
                    placeholder=" "
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Muhammed Bilal,
          <br />
          India,
          <br />
          Nagwara, 10th Cross <br />
          Bangalore <br />
          <br />
          <span>suzzanebs123@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.039104, 77.623834]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.039104, 77.623834]}>
              <Popup>Bilal lives here, Lets have a meetUp :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
