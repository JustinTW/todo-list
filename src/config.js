/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID || 'UA-124805682-1',
  },

  // Google API
  googleApis: {
    apiKey: process.env.apiKey || 'AIzaSyBb6mPWFv4QFSUeH-OyXdZPVcZDtXTtGfM',
    calendarId:
      process.env.calendarId ||
      'on5u94ds1i0opo6ikcud037kig@group.calendar.google.com',
    credential: {
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYBu6Nyk7SNm8g\nVP5L0D7JQvpUU2m18OnBBogqa5bkBlKtJLPWjufmmsExXcBLyuIYVQYsqCgHUoGH\n/B/HPbEknKr14Md2Plnv/zCpQb0ijtcjdgyumpgrJ+oMa0hV89jmC9gVumhbWY98\n1GA5XxlCi52se2PhLNTBl0QHEpifi7k5yOu2A1MGLG7FZsDApw8XzK5w2+fz1zDE\nMRCT4TEmuOaKoFb1rKgAC3u0jaisX/NwVB6irlXbxaVXaChC3rwlSj0k2ky+JVRK\nenAaUdUsuXIWKeWwOR+ixzyW+tmWW5N4a5KsP0xPNxiDbwi99OcXs2Odxvz7cPUI\nZoFVD9lHAgMBAAECggEADtXyVrTs7zevrYSN0mEul15pZmxDbyVk8ljMVfNs5LC3\nRb1ErYYBnG/ytXoUJ3FTkhNOCHKagWhsSpRwl3VuQYfmaRs369KW3URWf9Xx+prc\n5NGC2FEu01tQTEj15Klou75hJnGr+Gorhf+FqmOc5/EPAIOEEjfZRVEZKuWGLl+C\nKvz/cposWrweIrTruNvoKUCAJVtZhajgARQfWXb4D7rC4jTH/PGGhf6P6PE4tShO\n+4msohNbrbAju2lm9/bsC2Sn59cJ4YKFya+qQexgmxhQDVR38dCnOGzHysJuQgFe\nqmKS1jtC4PkloJs4u41c/TyTCcRXgSOKuw7Xz44TwQKBgQDTB6HF21hp4A+/7kGl\nfAsJZruQ5JLcnsxQMbrpbjAp3ZhwbwDiePu6fdB5Gewa006vPeemIPEj3cO6esV8\nOTmCmYKbz5PlIu2eVRE7js2WsLJByqgKvDgUsa2GMj0ye2jJzCPIyod0FRU6wobD\nJoLnyQs5lonuYqQVrwxq4ZYIwQKBgQC4bIHfzQh/ju1GWp15V8w8PmE3QHPCVysI\nhaW/z6Nl2B1La0/zjCQ1zHqy40biZGefG2a4SBlPVLxaCbjFuJfBRNJn5JP4bRvr\nWQr7M31CDFAS8tgVvj4LUaX2YH0qriqzRFuX+XNun5pEUMZGPbfnoGlt16E8keng\nyTpFRKCcBwKBgG6cTnf1q5b7IWY5jOEfbm2EEoY0uKG4/mB+YHkgD1CyXMd59129\nijxK2+3N34qD/XcvHG9gTuS8xW3GEiM1n2ZL7kCbAesVbrUR45FzHWGBxj1j6saN\nt1tpcgmn5ZnDQ76aKJuDRJJcxp7g/V/mnLC/GQobVLrFqznOYdTX3xtBAoGAGTgt\nYm9lVBw1ckN9+VP6R9q37JhRvCezaMzt55b7Xzf4eZHJMyLc6MZ3mPLfhKH6UZWr\nrFOfsmuB/kYKEG+3wOQqaa6mVXiGMt7QU52s6VVJte2jgwWq8l1N9q0nMKj0ieM1\nK0kfcec9b04kbwKNnY0gHbc5A1FozCZ4Y3SJCg0CgYEAktBB/3/nM+zpvbu3vlVk\nFKWN/IVgVhqMNELacWfEJn5ErdwUxLYaAcbGjaw34Hn8QdJ0kb690+GeS6ZL1eic\ncGgprsBKK1mjN+ksHprnJwJW2+nTdQqnLmwu2KRj1nRdSP7C6tBDJdZbeheCjvRC\nqiKdg4i4SPPuommIRy77Cyw=\n-----END PRIVATE KEY-----\n',
      client_email:
        'demo-user-01@to-do-list-app-for-interview.iam.gserviceaccount.com',
      // type: 'service_account',
      // project_id: 'to-do-list-app-for-interview',
      // private_key_id: '214a7a41a971760fca602f32601988f3cad25914',
      // client_id: '109937247313215099555',
      // auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      // token_uri: 'https://oauth2.googleapis.com/token',
      // auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      // client_x509_cert_url:
      // 'https://www.googleapis.com/robot/v1/metadata/x509/demo-user-01%40to-do-list-app-for-interview.iam.gserviceaccount.com',
    },
  },
};
