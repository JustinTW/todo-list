import React from 'react';
import Todo from './Todo';
import Layout from '../../components/Layout';

const todos = {
  items: [],
  lsKey: 'todos',
  populate() {
    this.items = this.get();
  },
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.lsKey)) || [];
    } catch (e) {
      return [];
    }
  },
  save() {
    localStorage.setItem(this.lsKey, JSON.stringify(this.items));
  },
  toggle(id) {
    const todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },
  add(obj) {
    this.items.push(obj);
    this.save();
  },
  remove(id) {
    this.items.splice(id, 1);
    this.save();
  },
  update(id, task) {
    const todoItem = this.items[id];
    todoItem.task = task;
    this.save();
  },
};

todos.populate();

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
