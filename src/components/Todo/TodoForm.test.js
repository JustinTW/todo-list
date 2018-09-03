/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';
import Layout from '../../components/Layout';
import TodoForm from './TodoForm';

function createNodeMock(element) {
  if (element.type === 'input') {
    // This is your fake DOM node for <input>.
    // Feel free to add any stub methods, e.g. focus() or any
    // other methods necessary to prevent crashes in your components.
    return { value: 'aaa' };
  }
  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
}

describe('Layout', () => {
  test('renders children correctly', () => {
    const options = { createNodeMock };
    const wrapper = renderer
      .create(
        <App context={{ insertCss: () => {}, fetch: () => {}, pathname: '' }}>
          <Layout>
            <TodoForm onSummarySubmit={() => {}} />
          </Layout>
        </App>,
        options,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
