import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Todo from '../../components/Todo';

class Home extends React.Component {
  static contextTypes = { fetch: PropTypes.func.isRequired };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Todo />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
