const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    wasteType: { type: String, required: true },
    frequency:  { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Object },
    paymentStatus: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Pickup', pickupSchema);
