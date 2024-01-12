import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';

type AppStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
