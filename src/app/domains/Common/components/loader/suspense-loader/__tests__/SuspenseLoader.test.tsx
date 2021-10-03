import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import SuspenseLoader from '../SuspenseLoader';

const renderer = createRenderer();

describe('<SuspenseLoader />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<SuspenseLoader />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
