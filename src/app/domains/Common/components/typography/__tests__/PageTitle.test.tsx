import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import PageTitle from '../PageTitle';

const renderer = createRenderer();

describe('<PageTitle />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<PageTitle>This is Page Title</PageTitle>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
