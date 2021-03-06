const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "img": {
        type: String,
        required: true
    },
    "summary": {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', ArticleSchema);