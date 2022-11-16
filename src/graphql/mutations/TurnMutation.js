const {GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');
const TurnType = require('../queries/TurnType');
const Turn = require('../../models/Turn')

const addTurn = {
  type: TurnType,
  args: {
    game_id: {
      game_id: 'game_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    turn: {
      name: 'turn',
      type: new GraphQLNonNull(GraphQLInt)
    },
    flip1: {
      name: 'flip1',
      type: new GraphQLNonNull(GraphQLInt)
    },
    flip2: {
      name: 'flip2',
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: async function (root, params) {
    const turn = new Turn(params);
    const newTurn = await turn.save();
    if (!newTurn) {
      throw new Error('Error')
    }

    return newTurn;
  }
}

module.exports = { addTurn };