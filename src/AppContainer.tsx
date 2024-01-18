import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigator from '@navigations/RootNavigator';
import {useAppSelector} from '@redux/hooks';
import Loader from '@components/loader/Loader';

const AppContainer: React.FC = () => {
  const {isLoading} = useAppSelector(state => state.loader);
  return (
    <View style={styles.container}>
      <RootNavigator />
      {isLoading && <Loader />}
      {/* <Toast config={toastCofig} /> */}
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toastContainer: {
    backgroundColor: 'black',
    width: '90%',
    padding: 10,
    borderRadius: 8,
  },
  toastText: {
    color: 'white',
  },
});
