const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());





const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/doctorSearch');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define the doctor schema
const doctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    area: String
});

// Create the doctor model
const Doctor = mongoose.model('doctors', doctorSchema);

// Set up middleware to parse incoming requests
app.use(bodyParser.json());

// Define the route for handling form submissions
app.post('/search', async (req, res) => {
    const { doctorName, specialty, area } = req.body;

    try {
        // Fetch all doctors matching the provided specialty and area
        const matchingDoctors = await Doctor.find({
            specialty: { $regex: new RegExp(specialty, 'i') },
            area: { $regex: new RegExp(area, 'i') }
        });

        // Filter doctors based on the provided doctorName if available
        const filteredDoctors = doctorName
            ? matchingDoctors.filter(doctor =>
                  doctor.name.toLowerCase().includes(doctorName.toLowerCase())
              )
            : matchingDoctors;

        res.json(filteredDoctors);
    } catch (error) {
        console.error('Error searching for doctors:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
