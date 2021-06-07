const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    winner: {
      type: Schema.Types.ObjectId,
      ref: 'Player'
    },
    competition: {
        type:Schema.Types.ObjectId,
        ref: 'Competition'
      },
    players: [{
      type: Schema.Types.ObjectId,
      ref: 'Player'
    }],
    date: {
      type: Date,
      default: Date.now
    }
  }
);

//const Game = mongoose.model("Game", gameSchema);

module.exports = mongoose.model("Game", gameSchema);
