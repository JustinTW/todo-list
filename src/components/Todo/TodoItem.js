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
    const classes =
      'list-group-item justify-content-between align-items-center';
    return (
      <li className={classes}>
        {this.props.summary}
        <button
          type="button"
          className="btn btn-xs btn-danger img-circle float-right"
          onClick={this.removeNode}
        >
          &#xff38;
        </button>
        {/* <div className="container">
          <div className="row">
            <div className="col overflow-hidden">



            </div>
          </div>
        </div> */}
        {/* <div className="overflow-hidden" />
        <div className="float-right">

        </div> */}
      </li>
    );
  }
}

export default TodoItem;
