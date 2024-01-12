import React from 'react';
import {render, fireEvent, RenderAPI} from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  let component: RenderAPI;

  const onPressMock = jest.fn();

  beforeEach(() => {
    component = render(<Button title="Click me" onPress={onPressMock} />);
  });

  it('renders correctly', () => {
    const {getByText} = component;
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onpress when click', () => {
    const {getByText} = component;
    const buttonElement = getByText('Click me');

    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
