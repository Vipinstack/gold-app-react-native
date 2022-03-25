import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Screen from './src/ScreenView/Screen'
import { NavigationContainer } from '@react-navigation/native';
import StackNavScreen from './src/Navigation/StackNav/StackNavScreen';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
      <Screen>
        <NavigationContainer>
          <StackNavScreen />
        </NavigationContainer>
      </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
