import { create } from 'react-test-renderer';

import CardSkeleton from '../CardSkeleton';
import { CardSkeletonProps } from './../types';

jest.mock('../SkeletonBody', () => 'SkeletonBody');

describe('CardSkeleton', () => {
  const renderComponent = (props: Partial<CardSkeletonProps> = {}) =>
    create(<CardSkeleton {...props} />);

  it('should render', () => {
    const component = renderComponent().toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render when noOfCards is provided', () => {
    const component = renderComponent({ noOfCards: 3 }).toJSON();
    expect(component).toMatchSnapshot();
  });
});
