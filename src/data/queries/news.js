import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import NewsItemType from '../types/NewsItemType';

// React.js News Feed (RSS)
const url = 'http://localhost:3001/news';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new List(NewsItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 3 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            items = data;
          }

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default news;
