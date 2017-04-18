import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export const path = '/';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Desde el Ring');
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
                  /* data.news */
  return <Home news={mock} />;
};
