import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  static propTypes = {
    removeNode: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        summary: PropTypes.string.isRequired,
        htmlLink: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        description: PropTypes.string.string,
      }),
    ).isRequired,
  };

  removeNode = nodeId => this.props.removeNode(nodeId);

  render() {
    const listNodes = this.props.data.map(
      listItem => (
        <TodoItem
          key={listItem.id}
          nodeId={listItem.id}
          summary={listItem.summary}
          removeNode={this.removeNode}
        />
      ),
      this,
    );
    return <ul className="list-group">{listNodes}</ul>;
  }
}

export default TodoList;
