import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SocialBar.scss';
import Link from '../Link';

function SocialBar() {
  const media = [];
  [
    {
      name: 'Twitter',
      url: 'http://twitter.com/desdeelring',
      className: 'tw',
    },
    {
      name: 'Facebook',
      url: 'http://fb.com/desderingside',
      className: 'fb',
    },
    {
      name: 'Instagram',
      url: 'http://instagram.com/desdeelring',
      className: 'in',
    },
  ].forEach((socialMedia, index) => {
    media.push(
            <Link key={`react=app=box${index}`}
              target="_blank"
              to={socialMedia.url}
              title={socialMedia.name}
              className={s[socialMedia.className]}
            >
                <i className={`fa fa-${socialMedia.name.toLocaleLowerCase()}`} aria-hidden="true" />
            </Link>
        );
  });
  return (
        <div className={s.socialbar}>
            {media}
        </div>
    );
}

export default withStyles(SocialBar, s);
