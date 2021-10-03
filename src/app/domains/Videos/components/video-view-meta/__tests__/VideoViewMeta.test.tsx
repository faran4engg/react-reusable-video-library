import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import VideoViewMeta from '../VideoViewMeta';

/*
	beforeEach(() => {
	  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
	});

	afterEach(() => {
	  jest.spyOn(global.Math, 'random').mockRestore();
	});
*/
const renderer = createRenderer();

describe('<VideoViewMeta />', () => {
  it('should render and match the snapshot with watch button', () => {
    renderer.render(<VideoViewMeta videoViewUrl="/path/id" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot w/o watch button', () => {
    renderer.render(
      <VideoViewMeta videoViewUrl="/path/id" showWatchBtn={false} />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
