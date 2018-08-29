import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import event from './queries/event';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      event,
    },
  }),
});

export default schema;
