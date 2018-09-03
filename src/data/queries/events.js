import { GraphQLList as ListType } from 'graphql';
import fetch from 'node-fetch';
import EventItemType from '../types/EventItemType';
import { googleApis } from '../../config';

const { GoogleToken } = require('gtoken');

// Google calendar api
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
  googleApis.calendarId,
)}/events`;

let items = [];

const events = {
  type: new ListType(EventItemType),
  resolve() {
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

      fetch(url, { headers })
        .then(response => response.json())
        .then(response => {
          items = response.items;
          return items;
        })
        .catch(fetchErr => {
          throw fetchErr;
        });
      return items;
    });
    return items;
  },
};

export default events;
