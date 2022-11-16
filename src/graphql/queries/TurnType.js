const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLNonNull } = require('graphql');

const TurnType = new GraphQLObjectType({
  name: 'TurnType',
  description: "This represent a turn",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    game_id: { type: new GraphQLNonNull(GraphQLString) },
    turn: { type: new GraphQLNonNull(GraphQLInt) },
    flip1: { type: new GraphQLNonNull(GraphQLInt) },
    flip2: { type: new GraphQLNonNull(GraphQLInt) }
  })
});

module.exports = TurnType;