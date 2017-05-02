import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import DateUtils from '../../utils/DateUtils';

function Home({ news }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <ul className={s.news}>
          {news.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <div className={s.newsContainer}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <div className={s.author}>
                  <small>{item.author}</small>&nbsp;|&nbsp;
                  <small>{DateUtils.customFormat(item.created)}</small>
                </div>
                <img title={item.title} src={item.img} />
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
