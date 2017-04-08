/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

const sections = [
  'lo + hot',
  'noticias',
  'peleas tv',
  'records',
];

function Navigation() {
  let nav = [];
  sections.forEach((section, index) => {
    const route = `${section.split(' ').join('-')}`;
    nav.push(<li key={`react=app=nav-box${index}`}>
    <Link className={s.Link} to={route}>{section.toUpperCase()}</Link></li>);
  });
  return (
    <ul className={s.nav} role="navigation">
      {nav}
    </ul>
  );
}

export default withStyles(Navigation, s);
