import React from 'react';
import { CopyBlock, dracula, github } from 'react-code-blocks';
import { useDHContext } from '../context/DHContext';

export interface DHCodeProps {
  lang?: string;
  code: string;
  showLineNumbers?: boolean;
  className?: string;
  filename?: string;
}

const DHCode: React.FC<DHCodeProps> = ({
  lang = 'javascript',
  code,
  showLineNumbers = false,
  className,
  filename,
}) => {
  const { settings } = useDHContext();

  // Pick theme from context or fallback to 'github'
  const theme =
    settings.codeBlockTheme === 'dracula'
      ? dracula
      : settings.codeBlockTheme === 'github'
      ? github
      : github;

  return (
    <div className={`doc-helper__code ${className || ''}`}>
      {filename && <div className="doc-helper__code-filename">{filename}</div>}
      <div className="doc-helper__code-block">
        <CopyBlock
          language={lang}
          text={code}
          codeBlock
          theme={theme}
          showLineNumbers={showLineNumbers}
        />
      </div>
    </div>
  );
};

DHCode.displayName = 'DHCode';
export { DHCode };
