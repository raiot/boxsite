import React from 'react';
import NewsItem from './News';
import fetch from '../../core/fetch';

export const path = '/news/:id';
export const action = async (state) => {
  const response = await fetch('/graphql?query={newsItem{id:$id,title,content,author,date,image}}');
  const { data } = await response.json();
  const mock = {
    title: 'Mock New',
    content: '<div>This is a mock of how the body of news would look like. This is a mock 2 of how the body of news would look like.This is a mock of how the body of news would look like. This is a mock 2 of how the body of news would look like.This is a mock of how the body of news would look like. This is a mock 2 of how the body of news would look like.This is a mock of how the body of news would look like. This is a mock 2 of how the body of news would look like.</div>',
    author: 'Mock autor',
    date: (new Date).getTime(),
    img: 'http://placehold.it/800x400',
  };
  const title = mock.title;
  state.context.onSetTitle(title);
  return <NewsItem item={mock} />;
};
