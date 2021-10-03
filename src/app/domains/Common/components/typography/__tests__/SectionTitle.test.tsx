import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import SectionTitle from '../SectionTitle';

const renderer = createRenderer();

describe('<SectionTitle />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<SectionTitle>This is Section Title</SectionTitle>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
