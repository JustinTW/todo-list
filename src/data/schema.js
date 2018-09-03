import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import events from './queries/events';
import event from './queries/event';
import createTodo from './mutation/createTodo';
import deleteTodo from './mutation/deleteTodo';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      events,
      event,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createTodo,
      deleteTodo,
    },
  }),
});

export default schema;
