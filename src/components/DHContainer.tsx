'use client';

import React, { ReactNode, useEffect, useState, ReactElement } from 'react';
import scrollTo from '../lib/scroll-to';
import { useDHContext } from '../context/DHContext';
// import { IoIosArrowForward } from 'react-icons/io';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface DHContainerProps {
  title: string | ReactNode;
  content?: ReactNode;
  children?: ReactNode;
}

const DHContainer: React.FC<DHContainerProps> = ({
  title,
  content,
  children,
}) => {
  const { settings } = useDHContext();

  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const generateToc = (items: ReactNode): TocItem[] => {
      const tocItems: TocItem[] = [];
      const traverse = (items: ReactNode, level = 0) => {
        React.Children.forEach(React.Children.toArray(items), (item) => {
          const elementType =
            ((item as React.ReactElement).type as any)?.displayName || '';

          if (React.isValidElement(item) && elementType === 'DHBlock') {
            const element = item as ReactElement<{
              id: string;
              title: string;
              children?: ReactNode;
            }>;
            tocItems.push({
              id: element.props.id,
              title: element.props.title,
              level,
            });
            if (element.props.children)
              traverse(element.props.children, level + 1);
          }
        });
      };
      traverse(items);
      return tocItems;
    };

    setToc(generateToc(children));
  }, [children]);

  const onScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ): void => {
    e.preventDefault();
    scrollTo(`doc-helper__${id}`, { offset: -130 })(e);
  };

  return (
    <div>
      <div className="doc-helper doc-helper__container">
        <nav className="doc-helper__toc">
          <ul className={''} style={{ top: settings?.offsetTop || '0px' }}>
            {toc.map((item) => (
              <li style={{ paddingLeft: item.level * 15 + 12 }} key={item.id}>
                <a
                  onClick={(e) => onScroll(e, item.id)}
                  className={`doc-helper__toc-item ${
                    item.level > 0 ? 'doc-helper__toc-nested' : ''
                  }`}
                >
                  {/* {item.level > 0 && (
                    <IoIosArrowForward className="mt-1 mr-1 text-[90%]" />
                  )} */}
                  {item.level > 0 && <span>-</span>}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="doc-helper__body">
          <div className="">
            <h1 className="">{title}</h1>
            {content && <div>{content}</div>}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

DHContainer.displayName = 'DHContainer';
export { DHContainer };
