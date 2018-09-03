import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { calendar } from 'react-icons-kit/iconic/calendar';
import { clock } from 'react-icons-kit/iconic/clock';
import { loop } from 'react-icons-kit/iconic/loop';
import { task } from 'react-icons-kit/iconic/task';
import { trash } from 'react-icons-kit/iconic/trash';

class TodoItem extends React.Component {
  static propTypes = {
    removeNode: PropTypes.func.isRequired,
    fetchDetail: PropTypes.func.isRequired,
    summary: PropTypes.string.isRequired,
    start: PropTypes.string,
    end: PropTypes.string,
    nodeId: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    nodeId: '',
    start: '',
    end: '',
    description: '',
  };

  removeNode = e => {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
  };

  fetchDetail = e => {
    e.preventDefault();
    this.props.fetchDetail(this.props.nodeId);
  };

  updateClass = () => {};

  render() {
    const classes =
      'list-group-item list-group-item-action justify-content-between align-items-center';
    return (
      <li className={classes}>
        <div className="container">
          <div className="row">
            <div className="col col-md-4" />
            <div className="col col-md-3">
              <Icon icon={clock} />
              <span className="badge badge-light">{this.props.start}</span>
            </div>
            <div className="col col-md-3">
              <Icon icon={clock} />
              <span className="badge badge-light">{this.props.end}</span>
            </div>
            <div className="col col-md-2" />
          </div>
          <div className="row">
            <div className="col col-sm-4">
              <h2 className="text-muted text-truncate">
                <Icon icon={calendar} /> {this.props.summary}
              </h2>
            </div>
            <div className="col">
              <Icon icon={task} /> {this.props.description}
            </div>
            <div className="col col-sm-2 mt-1">
              <button
                type="button"
                className="btn btn-xs btn-danger img-circle float-right"
                title="Remove"
                onClick={this.removeNode}
              >
                <Icon icon={trash} />
              </button>
              <button
                type="button"
                className="btn btn-xs btn-primary img-circle float-right"
                title="Fetch Detail"
                onClick={this.fetchDetail}
              >
                <Icon icon={loop} />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
