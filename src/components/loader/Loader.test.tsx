import React from 'react';
import {render} from '@testing-library/react-native';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<Loader />);
    const loaderComponent = getByTestId('activity-indicator');
    expect(loaderComponent).toBeTruthy();
  });

  it('renders ActivityIndicator with correct size and color', () => {
    const {getByTestId} = render(<Loader />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator.props.size).toBe('large');
    expect(activityIndicator.props.color).toBe('blue');
  });

  it('matches snapshot', () => {
    const {toJSON} = render(<Loader />);
    expect(toJSON()).toMatchSnapshot();
  });
});
