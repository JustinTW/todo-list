import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  static propTypes = {
    onSummarySubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.summaryRef = React.createRef();
  }

  doSubmit = e => {
    e.preventDefault();
    console.info(this.summaryRef.current.value);
    const summary = this.summaryRef.current.value.trim();
    if (!summary) {
      return;
    }
    this.props.onSummarySubmit(summary);
    this.summaryRef.current.value = '';
  };

  render() {
    return (
      <div className="commentForm vert-offset-top-2">
        <div className="clearfix">
          <form onSubmit={this.doSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label htmlFor="summary">Event</label>
                <input
                  type="text"
                  id="summary"
                  ref={this.summaryRef}
                  className="form-control"
                  placeholder="What do you need to do?"
                  maxLength="95"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group col-md-2">
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
              <div className="form-group col-md-2">
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
