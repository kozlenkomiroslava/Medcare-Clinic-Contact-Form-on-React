import { useState } from "react";
import ModalWindow from "./ModalWindow";
import "./ModalWindow.css";

const doctors = [
  "Podiatrist",
  "Surgeon",
  "Dermatologist",
  "Orthopedist",
  "Cardiologist",
];

function AppointmentForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);

    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setShowModal(true);
    };

    return (
        <> 
            <form className="appointment-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Choose a doctor</label>
                    <select
                        id="doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        required>

                        <option value="">Select a doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor} value={doctor}>
                                {doctor}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className="checkbox-group">
                    <input
                        id="consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                    />
                    <label htmlFor="consent">
                        I agree to be contacted about my appointment.
                    </label>
                </div>

                {error && (
                    <p className="form-error">{error}</p>
                )}

                <button className="submit-button" type="submit">
                    Book appointment
                </button>

            </form>

            {showModal && (
                <ModalWindow onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default AppointmentForm