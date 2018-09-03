import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Todo from '../../components/Todo';

class Home extends React.Component {
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

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Todo event={this.props.event} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
