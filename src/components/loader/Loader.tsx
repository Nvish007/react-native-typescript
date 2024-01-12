import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        testID="activity-indicator"
        size={'large'}
        color={'blue'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
