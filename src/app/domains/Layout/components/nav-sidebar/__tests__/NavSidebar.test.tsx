import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import NavSidebar from '../NavSidebar';

const renderer = createRenderer();

describe('<NavSidebar />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      <NavSidebar isSidebarOpen={false} handleIsSidebarOpen={jest.fn()} />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
