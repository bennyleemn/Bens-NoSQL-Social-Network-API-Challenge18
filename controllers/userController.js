const User = require("../models/user");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("posts");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //   /
    //   async createUser(req, res) {
        const { username, email } = req.body;
  //     try {
  //       const dbUserData = await user.create(req.body);
  //       res.json(dbUserData);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },
};
