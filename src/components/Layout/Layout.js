import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import GithubCorner from 'react-github-corner';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import s from './Layout.css';
import Header from '../Header';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <GithubCorner
          href="https://github.com/justintw/todo-list"
          bannerColor="#7253aa"
          octoColor="#fff"
          width={80}
          height={80}
          direction="right"
        />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(normalizeCss, bootstrap, s)(Layout);
