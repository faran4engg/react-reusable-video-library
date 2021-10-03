import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import routeData from 'react-router';
import { create } from 'react-test-renderer';
import WatchPage from '..';

const mockMatch = {
  params: { id: 'video-id' },
  isExact: false,
  path: 'test-path',
  url: 'test-url',
};
beforeEach(() => {
  jest.spyOn(routeData, 'useRouteMatch').mockReturnValue(mockMatch);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<WatchPage />', () => {
  const renderProps = jest.fn();

  const renderComponent = () =>
    create(
      <WatchPage>
        {renderPropParams => {
          renderProps({ ...renderPropParams });
          return <div />;
        }}
      </WatchPage>,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });
});
