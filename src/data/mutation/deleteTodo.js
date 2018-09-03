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

let lastFetchTask = {}; // eslint-disable-line

const deleteTodo = {
  type: EventItemType,
  args: {
    id: {
      type: new NonNull(StringType),
    },
  },
  async resolve(_, { id }) {
    if (
      Object.prototype.hasOwnProperty.call(lastFetchTask, id) &&
      lastFetchTask[id]
    ) {
      return lastFetchTask[id];
    }

    // Get OAuth token and fetch data
    const gtoken = new GoogleToken({
      email: googleApis.credential.client_email,
      scope: ['https://www.googleapis.com/auth/calendar'], // or space-delimited string of scopes
      key: googleApis.credential.private_key,
    });

    const token = await gtoken.getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    lastFetchTask[id] = fetch(`${url}/${id}`, { headers, method: 'DELETE' })
      .then(response => {
        lastFetchTask[id] = null;
        if (response.status >= 299) {
          console.info('google api status error');
        }
        lastFetchTask[id] = null;
        return { id };
      })
      .catch(fetchErr => {
        lastFetchTask[id] = null;
        throw fetchErr;
      });
    return lastFetchTask[id];
  },
};

export default deleteTodo;
