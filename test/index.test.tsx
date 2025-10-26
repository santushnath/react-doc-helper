import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DHProvider, DHContainer, DHBlock } from '../src/index';

describe('DocHelper', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DHProvider>
        <DHContainer title="Test Doc">
          <DHBlock id="section1" title="Section 1">
            <p>Section content</p>
          </DHBlock>
        </DHContainer>
      </DHProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
