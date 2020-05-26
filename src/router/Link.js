import React from 'react';

import { combine } from './utils';
import { useRouter } from './Router';

function Link(props) {
  const router = useRouter();

  let className = props.className;
  if (props.href === router.path) {
    className = combine(className || '', 'active');
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== router.path) {
      router.navigate(props.href);
    }
  };

  return (
    <a {...props} className={className} onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default Link;
