import React, { ReactNode } from 'react';
import scrollTo from '../lib/scroll-to';

export interface DHScrollToProps {
  id: string;
  className?: string;
  children?: ReactNode;
}

const DHScrollTo: React.FC<DHScrollToProps> = ({ id, className, children }) => {
  const onScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(`doc-helper__${id}`, { offset: -130 })();
  };

  return (
    <a
      className={`doc-helper__anchor ${className}`}
      href="#"
      onClick={(e) => onScroll(e, id)}
    >
      {children}
    </a>
  );
};

DHScrollTo.displayName = 'DHScrollTo';
export { DHScrollTo };
