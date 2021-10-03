import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import CurrentlyWatching from '../CurrentlyWatching';

const renderer = createRenderer();

describe('<CurrentlyWatching />', () => {
  const currentlyWatchingObj = {
    id: '-MP_h3jk-12hjkh-3k12-jh3',
    title: 'Title',
    url: 'http://yt.com/watch?v=das90ads',
  };
  it('should render and match the snapshot', () => {
    renderer.render(
      <CurrentlyWatching currentlyWatching={currentlyWatchingObj} />,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
