const mongoose = require('mongoose');

const feedingRoutineSchema = new mongoose.Schema({
    livestock_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livestock',
        required: true
    },
    feeding_time: {
        type: Date,
        required: true
    },
    feed_type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const FeedingRoutine = mongoose.model('FeedingRoutine', feedingRoutineSchema);

module.exports = FeedingRoutine;
