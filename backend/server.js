require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});

app.post("/api/appointments", async (req, res) => {
    const { name, phone, doctor, date, message, consent } = req.body;

    if (!name?.trim() || !phone?.trim() || !doctor || !date || consent !== true) {
        return res.status(400).json({
            message: "Please fill in all required fields",
        });
    }

    try {
        const result = await pool.query(
            `INSERT INTO appointments
            (name, phone, doctor, date, message, consent)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id`,
            [
                name.trim(),
                phone.trim(),
                doctor,
                date,
                message || "",
                consent,
            ]
        );

        res.status(201).json({
            message: "Appointment saved successfully!",
            id: result.rows[0].id,
        });
    } catch (error) {
        console.error("Database error:", error.message);

        res.status(500).json({
            message: "Could not save appointment",
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});