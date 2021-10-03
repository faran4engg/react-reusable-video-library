import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import SidebarContent from '../SidebarContent';

const renderer = createRenderer();

describe('<SidebarContent />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<SidebarContent />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
