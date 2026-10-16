import "./ModalWindow.css";

function ModalWindow({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Appointment booked!</h2>
                <p>We will contact you soon.</p>

                <button onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default ModalWindow;
