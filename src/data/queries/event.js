import { GraphQLString as StringType } from 'graphql';
import fetch from 'node-fetch';
import EventItemType from '../types/EventItemType';
import { googleApis } from '../../config';

const { GoogleToken } = require('gtoken');

// Google calendar api
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
  googleApis.calendarId,
)}/events`;

let item = {}; // eslint-disable-line
let lastFetchTask = {}; // eslint-disable-line
let lastFetchTime = new Date(1970, 0, 1);

const event = {
  type: EventItemType,
  args: {
    id: {
      type: StringType,
    },
  },
  async resolve(_, { id }) {
    if (
      Object.prototype.hasOwnProperty.call(lastFetchTask, id) &&
      lastFetchTask[id]
    ) {
      return lastFetchTask[id];
    }
    if (
      new Date() - lastFetchTime > 1000 * 5 /* 5sec */ ||
      !Object.prototype.hasOwnProperty.call(item, id)
    ) {
      lastFetchTime = new Date();
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
      lastFetchTask[id] = fetch(`${url}/${id}`, { headers, method: 'GET' })
        .then(response => response.json())
        .then(response => {
          item[id] = response;
          lastFetchTask[id] = null;
          return item[id];
        })
        .catch(fetchErr => {
          lastFetchTask[id] = null;
          throw fetchErr;
        });
      if (item[id]) {
        return item[id];
      }
      return lastFetchTask[id];
    }
    return item[id];
  },
};

export default event;
