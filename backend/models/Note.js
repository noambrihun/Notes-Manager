const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: {
        type: String | Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}
)
const NoteModel = mongoose.model('Note', noteSchema);