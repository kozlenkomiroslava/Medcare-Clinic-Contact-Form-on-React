import clinicImage from "./assets/reception.jpg"
import AppointmentForm from './AppointmentForm'

function ContactSection() {
  return (
    <section className="contact-section">

        <div className="contact-container">

            <div className="contact-image">
                <img src={clinicImage} alt="Clinic" />

                <div className="image-overlay">
                    <h1>MedCare Clinic</h1>
                    <p>Your health, our priority</p>
                </div>
            </div>

            <div className="contact-form-wrapper">
                <AppointmentForm />
            </div>

        </div>

    </section>
  )
}

export default ContactSection