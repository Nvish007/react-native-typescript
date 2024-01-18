import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ToastComponentProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const ToastComponent: React.FC<ToastComponentProps> = ({message, type}) => {
  return (
    <View style={[styles.container, {backgroundColor: getTypeColor(type)}]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const getTypeColor = (type: 'success' | 'error' | 'info') => {
  switch (type) {
    case 'success':
      return '#4CAF50';
    case 'error':
      return '#FF5252';
    case 'info':
      return '#2196F3';
    default:
      return '#000000';
  }
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
  },
});

export default ToastComponent;
