import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Todo.css';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends React.Component {
  static propTypes = {
    event: PropTypes.arrayOf(
      PropTypes.shape({
        summary: PropTypes.string.isRequired,
        htmlLink: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        description: PropTypes.string.string,
      }),
    ).isRequired,
  };

  static contextTypes = { fetch: PropTypes.func.isRequired };

  constructor(props) {
    super(props);
    // Server side rendering (fast)
    const data = this.props.event;
    this.state = { data };

    // Client side rendering (slow)
    // this.state = { data: [] };
  }

  // Client side rendering (slow)
  //
  // componentDidMount() {
  //   // Load events from /graphql
  //   this.context
  //     .fetch('/graphql', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         query: '{event {id, summary, htmlLink, start, end}}',
  //       }),
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (!response.data || !response.data.event)
  //         throw new Error('Failed to load the event feed.');
  //       const data = response.data.event;
  //       this.setState({ data });
  //     })
  //     .catch(fetchErr => {
  //       throw fetchErr;
  //     });
  // }

  generateId = () => Math.floor(Math.random() * 90000) + 10000;

  handleNodeRemoval = nodeId => {
    this.context
      .fetch('/graphql', {
        body: JSON.stringify({
          query: `mutation {deleteTodo (id: "${nodeId}") {id}}`,
        }),
      })
      .then(response => response.json())
      .then(response => {
        if (!response.data)
          throw new Error(`Failed to remove event: ${nodeId}`);

        let { data } = this.state;
        data = data.filter(el => el.id !== nodeId);
        this.setState({ data });
      })
      .catch(fetchErr => {
        throw fetchErr;
      });
  };

  handleNodeDetail = nodeId => {
    this.context
      .fetch('/graphql', {
        body: JSON.stringify({
          query: `{ event (id: "${nodeId}") { description } }`,
        }),
      })
      .then(response => response.json())
      .then(response => {
        if (!response.data)
          throw new Error(`Failed to fetch event detail: ${nodeId}`);

        const { data } = this.state;
        // data = data.filter(el => el.id !== nodeId);
        console.info(response);
        this.setState({ data });
      })
      .catch(fetchErr => {
        throw fetchErr;
      });
  };

  handleSubmit = (summary, start, end) => {
    let { data } = this.state;
    const id = this.generateId().toString();
    data = data.concat([{ id, summary, start, end }]);
    this.setState({ data });
  };

  render() {
    return (
      <section className={s.offset}>
        <div className="jumbotron">
          <TodoForm onSummarySubmit={this.handleSubmit} />
          <TodoList
            data={this.state.data}
            removeNode={this.handleNodeRemoval}
            fetchDetail={this.handleNodeDetail}
          />
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Todo);
