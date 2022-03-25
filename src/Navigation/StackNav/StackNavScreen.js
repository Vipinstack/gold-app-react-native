import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../../Screens/Login/Auth';
import Signup from '../../Screens/Registration/Singup'
import Forgot from '../../Screens/ForgotPassword/Forgot'
import Main from '../../Screens/Home/Main'
import Purchase from '../../Screens/GoldPurchase/Purchase'
import Toastify from '../../Screens/GoldPurchase/Succesafully/Toastify';


const Stack = createStackNavigator();

const StackNavScreen = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      // headerShown: false,
      // }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" options={{ headerShown: false }} component={Auth} />
      <Stack.Screen name="home" options={{ headerShown: false }} component={Main} />
      <Stack.Screen name="Gold Purchase" component={Purchase} />
      <Stack.Screen name="registration" options={{ headerShown: false }} component={Signup} />
      <Stack.Screen name="forgotpassword" component={Forgot} />
      <Stack.Screen name="toastify" options={{ headerShown: false }} component={Toastify} />
    </Stack.Navigator>
  );
}

export default StackNavScreen