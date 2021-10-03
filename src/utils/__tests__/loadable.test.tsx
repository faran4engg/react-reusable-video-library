import React from 'react';
import { render } from '@testing-library/react';
import { lazyLoad } from 'utils/loadable';

const LoadingIndicator = () => <div>Loading</div>;

const LazyComponenWithDefaultExport = lazyLoad(
  () => import('../__mocks__/loadable.mock'),
);

const LazyComponentWithExportedFunction = lazyLoad(
  () => import('../__mocks__/loadable.mock'),
  module => module.ExportedFunc,
);

const LazyComponentWithFallback = lazyLoad(
  () => import('../__mocks__/loadable.mock'),
  undefined,
  {
    fallback: <LoadingIndicator />,
  },
);

describe('loadable', () => {
  it('should render null by default', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponenWithDefaultExport />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render null by default with empty options', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render fallback if given one', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithFallback />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render LazyComponent after waiting for it to load', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    LazyComponentWithExportedFunction({});
    expect(firstChild).toMatchSnapshot();
  });
});
