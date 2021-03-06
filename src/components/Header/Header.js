import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>To Do Events</h1>
            <div>
              All data backed by &nbsp;
              <a
                className={s.link}
                href="https://calendar.google.com/calendar/embed?src=on5u94ds1i0opo6ikcud037kig%40group.calendar.google.com&ctz=Asia%2FTaipei"
                target="_blank"
                rel="noopener noreferrer"
              >
                this public google calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
