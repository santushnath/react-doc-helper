import React, { ReactNode } from 'react';
import { Element } from 'react-scroll';
import { DHScrollTo } from './DHScrollTo';

export interface DHBlockProps {
  id: string;
  titleType?: keyof JSX.IntrinsicElements;
  title: string | ReactNode;
  content?: ReactNode;
  children?: ReactNode;
}

const DHBlock: React.FC<DHBlockProps> = ({
  id,
  titleType: Tag = 'h2',
  title,
  content,
  children,
}) => {
  return (
    <Element name={`doc-helper__${id}`}>
      <div className="doc-helper__block">
        <Tag className="doc-helper__title" id={`doc-helper__${id}`}>
          <DHScrollTo id={id}>
            {title}
            {/* <span className="doc-helper__icon">#</span> */}
          </DHScrollTo>
        </Tag>

        {content && <div className="doc-helper__content">{content}</div>}
        {children && <div className="doc-helper__children">{children}</div>}
      </div>
    </Element>
  );
};

DHBlock.displayName = 'DHBlock';
export { DHBlock };
