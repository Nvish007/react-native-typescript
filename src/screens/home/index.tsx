import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default Home;
