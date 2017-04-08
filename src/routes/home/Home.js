import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import DateUtils from '../../utils/DateUtils';

function Home({ /* news */ }) {
  const mock = [
    {
      title: 'Mock New',
      contentSnippet: '<div>This is a mock of how the body of news would look like. This is a mock 2 of how the body of news would look like.</div>',
      author: 'Mock autor',
      date: (new Date).getTime(),
      img: 'http://placehold.it/600x300',
    },
    {
      title: 'Mock New 2',
      contentSnippet: '<div>This is a mock 2 of how the body of news would look like. This is a mock 2 of how the body of news would look like.</div>',
      author: 'Mock autor 2',
      date: (new Date).getTime(),
      img: 'http://placehold.it/600x300',
    },
  ];
  return (
    <div className={s.root}>
      <div className={s.container}>
        <ul className={s.news}>
          {mock.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <div className={s.newsContainer}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <div className={s.author}>
                  <small>{item.author}</small>&nbsp;|&nbsp;
                  <small>{DateUtils.customFormat(item.date)}</small>
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
