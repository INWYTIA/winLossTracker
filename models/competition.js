const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const competitionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for this competition"
    },
    open: {
      type: Boolean,
      default: true
    },
    players: [{
      type: Schema.Types.ObjectId,
      ref: 'Player'
    }],
    games: [{
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }],
    date: {
      type: Date,
      default: Date.now
    }
  }
);

//const Competition = mongoose.model("Competition", competitionSchema);

module.exports = mongoose.model("Competition", competitionSchema);