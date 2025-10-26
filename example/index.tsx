import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BasicExample from './basic';
import './index.scss';
import '../src/css/style.css';
import { DHProvider } from '../src';

const App = () => {
  return (
    <>
      <DHProvider settings={{ offsetTop: '2rem', codeBlockTheme: 'github' }}>
        <BasicExample />
      </DHProvider>
    </>
  );
};

// @ts-ignore
ReactDOM.render(<App />, document.getElementById('root'));
