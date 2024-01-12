import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({onPress, title, ...rest}) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default Button;
