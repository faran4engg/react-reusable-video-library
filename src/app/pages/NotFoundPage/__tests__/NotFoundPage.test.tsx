import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import NotFoundPage from '..';

const shallowRenderer = createRenderer();

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<NotFoundPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
