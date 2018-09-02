import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  static propTypes = {
    onSummarySubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.summaryRef = React.createRef();
    this.startRef = React.createRef();
    this.endRef = React.createRef();
  }

  componentDidMount() {
    const start = this.startRef.current.value.trim();
    if (!start) {
      this.startRef.current.value = '2018-09-05T16:00:00+08:00';
    }
    const end = this.endRef.current.value.trim();
    if (!end) {
      this.endRef.current.value = '2018-09-05T16:30:00+08:00';
    }
  }

  doSubmit = e => {
    e.preventDefault();
    const summary = this.summaryRef.current.value.trim();
    const start = this.startRef.current.value.trim();
    const end = this.endRef.current.value.trim();
    if (!summary || !start || !end) {
      return;
    }
    this.props.onSummarySubmit(summary, start, end);
    this.summaryRef.current.value = '';
  };

  render() {
    return (
      <div className="commentForm vert-offset-top-2">
        <div className="clearfix">
          <form onSubmit={this.doSubmit}>
            <div className="form-row">
              <div className="form-group col-md-4">
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label htmlFor="summary">Event</label>
                <input
                  type="text"
                  id="summary"
                  ref={this.summaryRef}
                  className="form-control"
                  placeholder="What do you need to do?"
                  maxLength="42"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-md-3">
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label htmlFor="start">Start</label>
                <input
                  type="text"
                  id="start"
                  ref={this.startRef}
                  className="form-control"
                  placeholder="start"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-md-3">
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label htmlFor="end">End</label>
                <input
                  type="text"
                  id="end"
                  ref={this.endRef}
                  className="form-control"
                  placeholder="end"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-md-2">
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label htmlFor="">Operation</label>
                <input
                  type="submit"
                  value="Add Event"
                  className="btn btn-primary float-right"
                />
              </div>
            </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}

export default TodoForm;
