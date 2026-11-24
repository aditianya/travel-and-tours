const Booking = require('../models/Booking');

// @desc    Process Payment (Mock)
// @route   POST /api/payment/process
// @access  Private
const processPayment = async (req, res) => {
    const { amount, bookingId, paymentMethod } = req.body;

    if (!amount || !bookingId) {
        res.status(400);
        throw new Error('Missing payment details');
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock Success
    const success = true; // In a real gateway, this depends on the provider response

    if (success) {
        const paymentId = `PAY_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        // Update booking status
        const booking = await Booking.findById(bookingId);
        if (booking) {
            booking.paymentStatus = 'paid';
            booking.status = 'confirmed';
            booking.paymentId = paymentId;
            await booking.save();
        }

        res.status(200).json({
            success: true,
            paymentId,
            message: 'Payment processed successfully'
        });
    } else {
        res.status(400);
        throw new Error('Payment failed');
    }
};

module.exports = { processPayment };