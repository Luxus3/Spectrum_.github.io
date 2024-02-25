import React from 'react';
import { IconContext } from 'react-icons';

interface Props {
  href: string;
  children: JSX.Element;
  title: string;
}

export default function IconA({ children, href, title }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      {children}
    </a>
  );
}
