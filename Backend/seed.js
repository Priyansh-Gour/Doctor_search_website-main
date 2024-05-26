const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/doctorSearch', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    seedDatabase();
});

// Define the doctor schema
const doctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    area: String
});

// Create the doctor model
const Doctor = mongoose.model('doctors', doctorSchema);

// Seed data
const doctors = [
    { name: "Dr. John Smith", specialty: "Cardiology", area: "Downtown" },
    { name: "Dr. Emily Brown", specialty: "Pediatrics", area: "Uptown" },
    { name: "Dr. Michael Davis", specialty: "Orthopedics", area: "Midtown" },
    { name: "Dr. Sarah Wilson", specialty: "Dermatology", area: "Suburb" },
    { name: "Dr. Jessica Johnson", specialty: "Neurology", area: "Downtown" },
    { name: "Dr. William Garcia", specialty: "Gastroenterology", area: "Uptown" },
    { name: "Dr. Olivia Martinez", specialty: "Endocrinology", area: "Midtown" },
    { name: "Dr. James Rodriguez", specialty: "Ophthalmology", area: "Suburb" },
    { name: "Dr. Isabella Hernandez", specialty: "Psychiatry", area: "Downtown" },
    { name: "Dr. Ethan Lee", specialty: "Rheumatology", area: "Uptown" },
    { name: "Dr. David Johnson", specialty: "Cardiology", area: "Uptown" },
    { name: "Dr. Maria Garcia", specialty: "Pediatrics", area: "Midtown" },
    { name: "Dr. Andrew Brown", specialty: "Orthopedics", area: "Suburb" },
    { name: "Dr. Jennifer Martinez", specialty: "Dermatology", area: "Downtown" },
    { name: "Dr. Robert Wilson", specialty: "Neurology", area: "Uptown" },
    { name: "Dr. Sophia Davis", specialty: "Gastroenterology", area: "Midtown" },
    { name: "Dr. Christopher Smith", specialty: "Endocrinology", area: "Suburb" },
    { name: "Dr. Samantha Lee", specialty: "Ophthalmology", area: "Downtown" },
    { name: "Dr. Daniel Hernandez", specialty: "Psychiatry", area: "Uptown" },
    { name: "Dr. Victoria Brown", specialty: "Rheumatology", area: "Midtown" },
];

async function seedDatabase() {
    try {
        await Doctor.deleteMany(); // Clear existing documents
        await Doctor.insertMany(doctors); // Insert new documents
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
}
