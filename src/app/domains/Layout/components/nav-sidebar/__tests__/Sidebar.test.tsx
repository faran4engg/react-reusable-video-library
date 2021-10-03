import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import Sidebar from '../Sidebar';

const renderer = createRenderer();

describe('<Sidebar />', () => {
  it('should render and match the snapshot when sidebar is open', () => {
    renderer.render(<Sidebar isSidebarOpen />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot when sidebar is closed', () => {
    renderer.render(<Sidebar isSidebarOpen={false} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
