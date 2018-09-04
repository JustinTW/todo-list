/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem';

function createNodeMock(element) {
  if (element.type === 'input') {
    return { value: 'mock input value' };
  }
  return null;
}

describe('TodoItem', () => {
  test('renders children correctly', () => {
    const options = { createNodeMock };
    const wrapper = renderer
      .create(
        <TodoItem
          key="e"
          nodeId="d"
          summary=""
          start=""
          end=""
          description=""
          removeNode={() => {}}
          fetchDetail={() => {}}
        />,
        options,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
