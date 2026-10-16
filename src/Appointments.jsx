import { useEffect, useState } from "react";

function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/appointments")
            .then((response) => response.json())
            .then((data) => {
                setAppointments(data);
            });
    }, []);

    return (
        <div>
            {appointments.map((appointment) => (
                <p key={appointment.id}>
                    {appointment.name} — {appointment.doctor}
                </p>
            ))}
        </div>
    );
}

export default Appointments;