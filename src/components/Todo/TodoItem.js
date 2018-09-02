import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  static propTypes = {
    removeNode: PropTypes.func.isRequired,
    summary: PropTypes.string.isRequired,
    nodeId: PropTypes.string,
  };

  static defaultProps = {
    nodeId: '',
  };

  removeNode = e => {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
  };

  updateClass = () => {};

  render() {
    const classes = 'list-group-item clearfix';
    return (
      <li className={classes}>
        {this.props.summary}
        <div className="pull-right" role="group">
          <button
            type="button"
            className="btn btn-xs btn-danger img-circle"
            onClick={this.removeNode}
          >
            &#xff38;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
