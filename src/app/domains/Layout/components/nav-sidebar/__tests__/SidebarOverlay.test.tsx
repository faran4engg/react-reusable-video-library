import React from 'react';
import { act, create } from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';

import SidebarOverlay from '../SidebarOverlay';

const renderer = createRenderer();

describe('<SidebarOverlay  />', () => {
  const handleIsSidebarOpenMock = jest.fn();
  it('should render and match the snapshot when side is open', () => {
    renderer.render(
      <SidebarOverlay
        isSidebarOpen
        handleIsSidebarOpen={handleIsSidebarOpenMock}
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot when side is closed', () => {
    renderer.render(
      <SidebarOverlay
        isSidebarOpen={false}
        handleIsSidebarOpen={handleIsSidebarOpenMock}
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should close sidebar when clicked', () => {
    const renderComponent = () =>
      create(
        <SidebarOverlay
          isSidebarOpen={false}
          handleIsSidebarOpen={handleIsSidebarOpenMock}
        />,
      );
    const component = renderComponent();
    const root = component.root;
    const overlayEl = root.findAllByType('div')[0];
    act(() => {
      overlayEl.props.onClick();
    });

    expect(handleIsSidebarOpenMock).toHaveBeenCalledTimes(1);
  });
});
