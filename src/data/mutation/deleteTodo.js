import {
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import EventItemType from '../types/EventItemType';
import { googleApis } from '../../config';

const { GoogleToken } = require('gtoken');

let items = {};
// Google calendar api
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
  googleApis.calendarId,
)}/events`;

const deleteTodo = {
  type: new ListType(EventItemType),
  args: {
    id: {
      type: new NonNull(StringType),
    },
  },
  resolve: (_, { id }) => {
    // Get OAuth token and fetch data
    const gtoken = new GoogleToken({
      email: googleApis.credential.client_email,
      scope: ['https://www.googleapis.com/auth/calendar'], // or space-delimited string of scopes
      key: googleApis.credential.private_key,
    });

    gtoken.getToken((err, token) => {
      if (err) {
        throw err;
      }
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      fetch(`${url}/${id}`, { headers })
        .then(response => response.json())
        .then(response => {
          items = response;
          return items;
        })
        .catch(fetchErr => {
          throw fetchErr;
        });
      return items;
    });
  },
};

export default deleteTodo;
