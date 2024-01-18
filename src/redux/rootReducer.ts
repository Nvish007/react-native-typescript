import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import authReducer from '@redux/feature/auth/slice';
import loaderReducer from '@redux/feature/loader/slice';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const authReducerConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn', 'token', 'userDetails'],
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer<ReturnType<typeof authReducer>>(
    authReducerConfig,
    authReducer,
  ),
  loader: loaderReducer,
});

export default rootReducer;
