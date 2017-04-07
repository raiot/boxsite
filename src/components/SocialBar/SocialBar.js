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
    },
    {
      name: 'Facebook',
      url: 'http://fb.com/desderingside',
    },
    {
      name: 'Instagram',
      url: 'http://instagram.com/desdeelring',
    },
  ].forEach((socialMedia) => {
    media.push(
            <Link to={socialMedia.url} title={socialMedia.name} title={socialMedia.name}>
                <i className={`icon-${socialMedia.name.toLocaleLowerCase()}`} />
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
