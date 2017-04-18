import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './News.scss';
import DateUtils from '../../utils/DateUtils';

function News({ item }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{item.title}</h1>
        <div className={s.author}>
            <small>{item.author}</small>&nbsp;|&nbsp;
            <small>{DateUtils.customFormat(item.date)}</small>
        </div>
        <img title={item.title} src={item.img} />
        <div className={s.body} dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
    </div>
  );
}

News.propTypes = { item: PropTypes.object };

export default withStyles(News, s);

