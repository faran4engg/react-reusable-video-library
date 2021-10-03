import React from 'react';
import { act, create } from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';

import VideoCard from '../VideoCard';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderer = createRenderer();

describe('<VideoCard />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      <VideoCard title="Video Title" url="yt.com/abc" id="id" showWatchBtn />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should redirect to watch page', () => {
    const videoId = 'videoId';
    const renderComponent = () =>
      create(
        <VideoCard
          title="Video Title"
          url="yt.com/abc"
          id={videoId}
          showWatchBtn
        />,
      );
    const component = renderComponent();
    const root = component.root;
    const videoCard = root.findAllByType('div')[0];

    act(() => {
      videoCard.props.onClick();
    });

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith(`/watch/${videoId}`);
  });
});
