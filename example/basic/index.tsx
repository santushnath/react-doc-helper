import React from 'react';
import { DHContainer, DHCode, DHBlock, DHTable } from '../../src';

const BasicExample = () => {
  return (
    <section className="container">
      <DHContainer
        title="Getting Started"
        content="Learn how to use DH components to build structured documentation with sections, code examples, and tables."
      >
        <DHBlock
          id="installation"
          title="Installation"
          content="You can install the library using npm or yarn."
        >
          <DHCode
            filename="terminal"
            lang="json"
            code={`npm install react-doc-helper
# or
yarn add react-doc-helper`}
          />
        </DHBlock>

        <DHBlock
          id="usage"
          title="Basic Usage"
          content={
            <>
              Wrap your documentation layout with <code>DHContainer</code> and
              use <code>DHBlock</code> components to create sections.
            </>
          }
        >
          <DHCode
            filename="example.tsx"
            lang="tsx"
            code={`import { DHContainer, DHBlock, DHCode } from 'react-doc-helper';

export default function Example() {
  return (
    <DHContainer title="My Docs" content="Welcome to my documentation.">
      <DHBlock id="intro" title="Introduction" content="This is a simple guide." />
    </DHContainer>
  );
}`}
          />
        </DHBlock>

        <DHBlock
          id="nested-blocks"
          title="Nested Sections"
          content="Blocks can be nested to represent subsections of a topic."
        >
          <DHBlock
            titleType="h3"
            id="subsection-one"
            title="Subsection One"
            content="This is a nested block under the main section."
          >
            <DHCode
              code={`<DHBlock id="parent" title="Parent Section">
  <DHBlock id="child" title="Child Section" content="Nested content" />
</DHBlock>`}
            />
          </DHBlock>
        </DHBlock>

        <DHBlock
          id="tables"
          title="Using Tables"
          content="Use DHTable to display structured data such as properties, configurations, or options."
        >
          <DHTable
            data={[
              ['Prop', 'Description', 'Type', 'Default'],
              ['title', 'Section title', 'string | ReactNode', '—'],
              ['content', 'Section description', 'ReactNode', '—'],
              ['children', 'Nested blocks or elements', 'ReactNode', '—'],
            ]}
          />
        </DHBlock>

        <DHBlock
          id="code-blocks"
          title="Code Examples"
          content="Display code snippets using the DHCode component."
        >
          <DHCode
            filename="example.js"
            lang="javascript"
            code={`function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('World'));`}
            showLineNumbers
          />
        </DHBlock>

        <DHBlock
          id="customization"
          title="Customization"
          content="You can customize global settings such as scroll offset and code block theme using DHProvider."
        >
          <DHCode
            filename="app.tsx"
            code={`import { DHProvider } from 'react-doc-helper';

<DHProvider settings={{ offsetTop: '2rem', codeBlockTheme: 'github' }}>
  <App />
</DHProvider>`}
          />
        </DHBlock>

        <DHBlock
          id="conclusion"
          title="Conclusion"
          content="The DH components make it easy to build clean, navigable documentation layouts in React."
        />
      </DHContainer>
    </section>
  );
};

export default BasicExample;
