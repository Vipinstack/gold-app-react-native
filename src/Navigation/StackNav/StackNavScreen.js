import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Auth from '../../Screens/Login/Auth';
import Signup from '../../Screens/Registration/Singup'
import Forgot from '../../Screens/ForgotPassword/Forgot'
import Main from '../../Screens/Home/Main'
import Purchase from '../../Screens/GoldPurchase/Purchase'
import Toastify from '../../Screens/GoldPurchase/Succesafully/Toastify';
import Edit_Profile from '../../Screens/EditProfile/Edit_Profile';
import Logout from '../../Screens/LogoutScreen/Logout';
import UpdatePassword from '../../Screens/UpdatePassword/UpdatePassword';
import RestPassword from '../../Screens/RestPassword/RestPassword';


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
      <Stack.Screen name="edit_profile" options={{ title: 'Edit Profile' }} component={Edit_Profile} />
      <Stack.Screen name="update_password"   options={{ title: 'Update Password' }} component={UpdatePassword} />
      <Stack.Screen name="forgotpassword" component={Forgot} />
      <Stack.Screen name="reset_password"   options={{ title: 'Reset Password' }} component={RestPassword} />
      <Stack.Screen name="logout" options={{ headerShown: false }} component={Logout} />
      <Stack.Screen name="home" options={{ headerShown: false }} component={Main} />
      <Stack.Screen name="Gold Purchase" component={Purchase} />
      <Stack.Screen name="registration" options={{ headerShown: false }} component={Signup} />
      <Stack.Screen name="toastify" options={{ headerShown: false }} component={Toastify} />
    </Stack.Navigator>
  );
}

export default StackNavScreen
