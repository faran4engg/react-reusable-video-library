import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import routeData from 'react-router';
import { createRenderer } from 'react-test-renderer/shallow';
import WatchVideosContainer from '..';

const mockMatch = {
  params: { id: 'video-id' },
  isExact: false,
  path: 'asd',
  url: 'adas',
};
beforeEach(() => {
  jest.spyOn(routeData, 'useRouteMatch').mockReturnValue(mockMatch);
});

describe('<WatchVideosContainer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render and match the snapshot when loading', () => {
    const renderer = createRenderer();

    renderer.render(
      <WatchVideosContainer>{() => <div />}</WatchVideosContainer>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
