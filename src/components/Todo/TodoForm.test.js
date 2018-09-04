/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
// import shallow from 'enzyme';
import TodoForm from './TodoForm';

function createNodeMock(element) {
  if (element.type === 'input') {
    return { value: 'mock input value' };
  }
  return null;
}

describe('TodoForm', () => {
  test('renders children correctly', () => {
    const options = { createNodeMock };
    const wrapper = renderer
      .create(<TodoForm onSummarySubmit={() => {}} />, options)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
