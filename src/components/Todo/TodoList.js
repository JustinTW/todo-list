import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  static propTypes = {
    removeNode: PropTypes.func.isRequired,
    fetchDetail: PropTypes.func.isRequired,
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
  fetchDetail = nodeId => this.props.fetchDetail(nodeId);

  render() {
    const listNodes = this.props.data.map(
      listItem => (
        <TodoItem
          key={listItem.id}
          nodeId={listItem.id}
          summary={listItem.summary}
          start={listItem.start}
          end={listItem.end}
          removeNode={this.removeNode}
          fetchDetail={this.fetchDetail}
        />
      ),
      this,
    );
    return <ul className="list-group">{listNodes}</ul>;
  }
}

export default TodoList;
