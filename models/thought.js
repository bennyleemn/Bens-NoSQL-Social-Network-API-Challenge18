const mongoose = require('mongoose');
const { Schema } = mongoose;

const reactionSchema = new Schema({
  reactionId: mongoose.Schema.Types.ObjectId, 

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return timestamp;
    },
  },
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reactions: [reactionSchema], 
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

thoughtSchema.set('toJSON', {
  virtuals: true,
  getters: true,
  setters: false,
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;