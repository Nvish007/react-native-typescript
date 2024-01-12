import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default Login;
