import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import VideoPlayer from '../VideoPlayer';

const renderer = createRenderer();

describe('<VideoPlayer />', () => {
  it('should render and VideoPlayer should not be clickable', () => {
    renderer.render(<VideoPlayer url="yt.com/asd" disbaleVideoClick />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and VideoPlayer should be clickable', () => {
    renderer.render(
      <VideoPlayer
        url="yt.com/asd"
        disbaleVideoClick={false}
        isLightMode={false}
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
