import React from 'react';

import { create } from 'react-test-renderer';
import HomePage from '..';

jest.mock('react-query', () => ({
  useQuery: () => ({}),
}));

describe('<HomePage />', () => {
  const renderProps = jest.fn();

  const renderComponent = () =>
    create(
      <HomePage>
        {renderPropParams => {
          renderProps({ ...renderPropParams });
          return <div />;
        }}
      </HomePage>,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });

  it('should render with render prop', () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });
});
