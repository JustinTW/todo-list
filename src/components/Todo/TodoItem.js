import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { calendar } from 'react-icons-kit/iconic/calendar';
import { clock } from 'react-icons-kit/iconic/clock';
import { trash } from 'react-icons-kit/iconic/trash';

class TodoItem extends React.Component {
  static propTypes = {
    removeNode: PropTypes.func.isRequired,
    summary: PropTypes.string.isRequired,
    start: PropTypes.string,
    end: PropTypes.string,
    nodeId: PropTypes.string,
  };

  static defaultProps = {
    nodeId: '',
    start: '',
    end: '',
  };

  removeNode = e => {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
  };

  updateClass = () => {};

  render() {
    const classes =
      'list-group-item list-group-item-action justify-content-between align-items-center';
    return (
      <li className={classes}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <Icon icon={clock} />
                  <span className="badge badge-light">{this.props.start}</span>
                  ~ &nbsp;
                  <Icon icon={clock} />
                  <span className="badge badge-light">{this.props.end}</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>
                    <Icon icon={calendar} /> {this.props.summary}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col col-sm-1">
              <button
                type="button"
                className="btn btn-xs btn-danger img-circle float-right"
                onClick={this.removeNode}
              >
                <Icon icon={trash} />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
