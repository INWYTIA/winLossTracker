const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this player"
    },
    competitions: [{
        type: Schema.Types.ObjectId,
        ref: 'Competition'
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

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
