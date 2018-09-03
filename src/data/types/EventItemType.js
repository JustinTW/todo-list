import {
  GraphQLID as ID,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const EventItemType = new ObjectType({
  name: 'EventItem',
  fields: {
    id: {
      type: new NonNull(ID),
    },
    summary: { type: new NonNull(StringType) },
    htmlLink: { type: new NonNull(StringType) },
    start: {
      type: StringType,
      resolve(obj) {
        return obj.start.dateTime;
      },
    },
    end: {
      type: StringType,
      resolve(obj) {
        return obj.end.dateTime;
      },
    },
    description: { type: StringType },
  },
});

export default EventItemType;
