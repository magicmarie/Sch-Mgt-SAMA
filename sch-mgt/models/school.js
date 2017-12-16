const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const schoolSchema = mongoose.Schema({
    'communityUnit': { type: String, required: true },
    'schoolId': { type: Number, required: true },
    'name': { type: String, required: true },
    'oLevel': { type: Boolean, default: false },
    'aLevel': { type: Boolean, default: false },
    'boarding': { type: Boolean, default: false },
    'day': { type: Boolean, default: false },
    'female': { type: Boolean, default: false },
    'male': { type: Boolean, default: false },
    'no_students': { type: Number, required: true }
});

module.exports = mongoose.model('school', schoolSchema);
