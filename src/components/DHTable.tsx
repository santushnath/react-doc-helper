import React from 'react';
import { DHTags } from './DHTags';

type DHTableItemProps = (string | React.ReactNode)[];

export interface DHTableProps {
  data: DHTableItemProps[];
  header?: DHTableItemProps;
}

const DHTable: React.FC<DHTableProps> = ({
  data,
  header = ['Property', 'Description', 'Type', 'Default'],
}) => {
  return (
    <div className="doc-helper__table">
      <table className="doc-helper__table-element">
        <thead className="doc-helper__table-head">
          <tr>
            {header.map((item, i) => (
              <th key={i} className="doc-helper__table-header">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="doc-helper__table-body">
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((item, ii) => (
                <td key={ii} className="doc-helper__table-cell">
                  {Array.isArray(item) && !item.some(React.isValidElement) ? (
                    <DHTags size="sm" tags={item} className="!mb-0" />
                  ) : (
                    item
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DHTable.displayName = 'DHTable';
export { DHTable };
