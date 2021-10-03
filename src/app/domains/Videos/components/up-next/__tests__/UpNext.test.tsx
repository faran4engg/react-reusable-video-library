import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import UpNext from '../UpNext';

const renderer = createRenderer();

describe('<UpNext />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<UpNext />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
