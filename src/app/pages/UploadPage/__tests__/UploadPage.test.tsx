import React from 'react';

import { create } from 'react-test-renderer';
import UploadPage from '..';

describe('<UploadPage />', () => {
  const renderComponent = () => create(<UploadPage />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Google Login button', () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });
});
