import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import VideoDetails from '../VideoDetails';

const renderer = createRenderer();

describe('<VideoDetails />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      <VideoDetails
        details={{
          title: 'title',
          description: 'description',
          category: 'category',
          speakerName: 'NAK',
          tags: ['tagsA', 'tagB'],
        }}
        showMoreDetails
        videoViewUrl="/path/id"
      />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
