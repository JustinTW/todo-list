import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Todo.css';

class Todo extends React.Component {
  static propTypes = {
    event: PropTypes.arrayOf(
      PropTypes.shape({
        summary: PropTypes.string.isRequired,
        htmlLink: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        description: PropTypes.string.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.event.map(item => (
            <article key={item.htmlLink} className={s.eventItem}>
              <h1 className={s.eventTitle}>
                <a
                  href={item.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.summary}
                </a>
              </h1>
              <div
                className={s.eventDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Todo);
