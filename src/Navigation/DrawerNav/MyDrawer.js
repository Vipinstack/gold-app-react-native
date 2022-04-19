import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Main from '../../Screens/Home/Main';


const Drawer = createDrawerNavigator();

const MyDrawer =()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" options={{ headerShown: false }} component={Main} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;