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
          <form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
            <div className="form-group">
              <label htmlFor="summary" className="col-md-2 control-label">
                summary
                <div className="col-md-10">
                  <input
                    type="text"
                    id="summary"
                    ref={this.summaryRef}
                    className="form-control"
                    placeholder="What do you need to do?"
                  />
                </div>
              </label>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-2 text-right">
                <input
                  type="submit"
                  value="Save Item"
                  className="btn btn-primary"
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
