import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import EventItemType from '../types/EventItemType';
import { googleApis } from '../../config';

const { GoogleToken } = require('gtoken');

// Google Claendars API
const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
  googleApis.calendarId,
)}/events`;

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const event = {
  type: new List(EventItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();

      // Get Oauth token and fetch data
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

        lastFetchTask = fetch(url, { headers })
          .then(response => response.json())
          .then(data => {
            items = data.items;
            lastFetchTask = null;
            return items;
          })
          .catch(fetchErr => {
            lastFetchTask = null;
            throw fetchErr;
          });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      });
    }

    return items;
  },
};

export default event;
