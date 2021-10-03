import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import VideoGrid from '../VideoGrid';

const renderer = createRenderer();
const videos = [
  {
    id: '123',
    url: 'yt.com/asd',
    title: 'video title',
    description: 'description',
    isReviewed: true,
    language: 'english',
    speakerName: 'NAK',
    tags: ['tag1', 'tag2'],
    timestamp: 21312313,
    uploadedBy: 'Admin',
  },
];

describe('<VideoGrid />', () => {
  it('should render and match the snapshot when it is loading', () => {
    renderer.render(<VideoGrid isLoading />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot when it is not loading', () => {
    renderer.render(<VideoGrid isLoading={false} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot when it is not loading and videos are available', () => {
    renderer.render(<VideoGrid isLoading={false} videos={videos} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
