/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

function createNodeMock(element) {
  if (element.type === 'input') {
    return { value: 'mock input value' };
  }
  return null;
}

describe('TodoList', () => {
  test('renders children correctly', () => {
    const options = { createNodeMock };
    const wrapper = renderer
      .create(
        <TodoList
          data={[
            {
              id: 'id',
              summary: 'summary',
              htmlLink: 'htmlLink',
              start: 'start',
              end: 'end',
              description: 'description',
            },
          ]}
          removeNode={() => {}}
          fetchDetail={() => {}}
        />,
        options,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
