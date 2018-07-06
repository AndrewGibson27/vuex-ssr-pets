const { GraphQLDateTime } = require('graphql-iso-date')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} = require('graphql')

const Pie = require('./models/pie')
const Vote = require('./models/vote')

const pieCategoryType = new GraphQLEnumType({
  name: 'pieCategory',
  values: {
    SAVORY: { value: 'savory' },
    SWEET: { value: 'sweet' }
  }
})

const voteType = new GraphQLObjectType({
  name: 'Vote',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    created: { type: new GraphQLNonNull(GraphQLDateTime) },
    pie: { type: pieType }
  })
})

const pieType = new GraphQLObjectType({
  name: 'Pie',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    created: { type: new GraphQLNonNull(GraphQLDateTime) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    chef: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
    category: { type: pieCategoryType },
    savoryVotes: {
      type: new GraphQLList(voteType),
      resolve: async obj => {
        const pie = await Pie.findById(obj.id)
        return pie.savoryVotes
      }
    },
    sweetVotes: {
      type: new GraphQLList(voteType),
      resolve: async obj => {
        const pie = await Pie.findById(obj.id)
        return pie.sweetVotes
      }
    },
    overallVotes: {
      type: new GraphQLList(voteType),
      resolve: async obj => {
        const pie = await Pie.findById(obj.id)
        return pie.overallVotes
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      pies: {
        type: new GraphQLList(pieType),
        args: {
          limit: {
            type: GraphQLInt,
            default: 50
          },
          offset: {
            type: GraphQLInt,
            default: 0
          }
        },
        resolve: async (obj, { offset, limit }) => (
          Pie.find().skip(offset).limit(limit)
        )
      }
    }
  })
})

module.exports = schema
