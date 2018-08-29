import React from 'react';
import Todo from './Todo';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  // Load todo events from /graphql
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{event {summary,htmlLink, start, end}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.event) throw new Error('Failed to load the event feed.');

  return {
    title: 'TODO List Demo',
    chunks: ['todo'],
    component: (
      <Layout>
        <Todo event={data.event} />
      </Layout>
    ),
  };
}

export default action;
