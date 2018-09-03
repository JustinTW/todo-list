import {
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
} from 'graphql';
import fetch from 'node-fetch';
import EventItemType from '../types/EventItemType';
import { googleApis } from '../../config';

const { GoogleToken } = require('gtoken');

// Google calendar api
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
  googleApis.calendarId,
)}/events`;

const deleteTodo = {
  // type: new ListType(EventItemType),
  type: EventItemType,
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

      fetch(`${url}/${id}`, { headers, method: 'DELETE' })
        .then(response => {
          if (response.status >= 299) {
            console.info('google api status error');
          }
          return { id };
        })
        .catch(fetchErr => {
          throw fetchErr;
        });
    });
  },
};

export default deleteTodo;
