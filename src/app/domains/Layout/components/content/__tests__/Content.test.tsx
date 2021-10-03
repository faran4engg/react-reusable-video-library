import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import Content from '../Content';

const renderer = createRenderer();

describe('<Content />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Content>{() => <div />}</Content>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
