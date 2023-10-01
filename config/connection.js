const { connect, conection } = require("mongoose");

connect("mongodb://127.0.0.1:27017/socialNetworkChallenge");

module.exports = connection;
