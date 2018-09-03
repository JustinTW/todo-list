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

let item;
let lastFetchTask; // eslint-disable-line

const createTodo = {
  type: EventItemType,
  args: {
    id: {
      type: StringType,
    },
    summary: {
      type: new NonNull(StringType),
    },
    start: {
      type: new NonNull(StringType),
    },
    end: {
      type: new NonNull(StringType),
    },
    description: {
      type: StringType,
    },
  },
  async resolve(_, { summary, start, end, description }) {
    if (lastFetchTask) {
      return lastFetchTask;
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
    const method = 'POST';
    const body = {
      summary,
      start: { dateTime: start },
      end: { dateTime: end },
      description,
    };
    lastFetchTask = fetch(`${url}`, {
      headers,
      method,
      body: JSON.stringify(body),
    })
      .then(response => {
        item = response.json();
        lastFetchTask = null;
        return item;
      })
      .catch(fetchErr => {
        lastFetchTask = null;
        throw fetchErr;
      });
    return lastFetchTask;
  },
};

export default createTodo;
