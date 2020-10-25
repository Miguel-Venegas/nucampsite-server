const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

// MODEL

// const newPromotion = new Promotion({
//     name: 'Mountain Adventure',
//     image: 'images/breadcrumb-trail.jpg',
//     featured: true,
//     cost: 1299,
//     description: 'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
// });

module.exports = Promotion;