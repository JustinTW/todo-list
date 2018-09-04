/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';
import Layout from '../../components/Layout';
import Todo from './Todo';

function createNodeMock(element) {
  if (element.type === 'input') {
    return { value: 'mock input value' };
  }
  return null;
}

describe('Todo', () => {
  test('renders children correctly', () => {
    const options = { createNodeMock };
    const wrapper = renderer
      .create(
        <App context={{ insertCss: () => {}, fetch: () => {}, pathname: '' }}>
          <Layout>
            <Todo
              event={[
                {
                  id: 'id',
                  summary: 'summary',
                  htmlLink: 'htmlLink',
                  start: 'start',
                  end: 'end',
                  description: 'description',
                },
              ]}
            />
          </Layout>
        </App>,
        options,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
