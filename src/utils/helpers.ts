import {Dimensions, Platform} from 'react-native';
import Toast from 'react-native-toast-message';

export const isTablet = (): boolean => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  if (Platform.OS === 'ios') {
    return aspectRatio < 1.6;
  } else {
    return aspectRatio < 1.1;
  }
};

export const isMobile = (): boolean => !isTablet();

export const isIOS = (): boolean => Platform.OS === 'ios';

export const isEmptyObject = (obj: Record<string, any>): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

interface ToastOptions {
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
  position?: 'top' | 'bottom';
  onHide?: () => void;
  onPress?: () => void;
}

export const showToast = ({
  type,
  message,
  duration = 2500,
  position = 'top',
  onHide,
  onPress,
}: ToastOptions) => {
  Toast.show({
    text1: message,
    type: type,
    visibilityTime: duration,
    autoHide: true,
    position: position,
    bottomOffset: 0,
    onHide: onHide,
    onPress: onPress,
  });
};
