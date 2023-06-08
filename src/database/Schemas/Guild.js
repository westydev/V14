const { Schema, model } = require("mongoose");

const Guild = Schema({
  id: { type: String }
});

module.exports = model("Guild", Guild);