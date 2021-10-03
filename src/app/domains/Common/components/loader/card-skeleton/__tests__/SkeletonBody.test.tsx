import { create } from 'react-test-renderer';

import SkeletonBody from '../SkeletonBody';

describe('SkeletonBody', () => {
  it('should render', () => {
    const component = create(<SkeletonBody />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
