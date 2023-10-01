const Thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    const { thoughtText, username, userId } = req.body;
    try {
      const thought = new Thought({ thoughtText, username, userId });
      await thought.save();

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.thoughts.push(thought._id);
      await user.save();

      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThoughtById(req, res) {
    const { thoughtId } = req.params;
    const { thoughtText } = req.body;
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { thoughtText },
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const newReaction = {
        reactionBody,
        username,
      };

      thought.reactions.push(newReaction);
      await thought.save();

      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionId } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const reactionIndex = thought.reactions.findIndex(
        (reaction) => reaction.reactionId.toString() === reactionId
      );

      if (reactionIndex === -1) {
        return res.status(404).json({ message: 'Reaction not available' });
      }

      thought.reactions.splice(reactionIndex, 1);
      await thought.save();

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  async deleteThought(req, res) {
    try {
     
      const { thoughtId } = req.params;
      const deletedThought = await Thought.findByIdAndDelete(thoughtId);
  
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
  
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};