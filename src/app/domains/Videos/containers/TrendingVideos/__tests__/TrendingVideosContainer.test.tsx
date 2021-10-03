import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import TrendingVideosContainer from '..';

jest.mock('react-query', () => ({
  useQuery: () => ({}),
}));

describe('<TrendingVideosContainer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render and match the snapshot when loading', () => {
    const renderer = createRenderer();

    renderer.render(
      <TrendingVideosContainer>{() => <div />}</TrendingVideosContainer>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot when error', () => {
    const renderer = createRenderer();

    renderer.render(
      <TrendingVideosContainer>{() => <div />}</TrendingVideosContainer>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot successfully', () => {
    const renderer = createRenderer();
    renderer.render(
      <TrendingVideosContainer>{() => <div />}</TrendingVideosContainer>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
