import { createStackNavigator, createAppContainer } from 'react-navigation';
import  { LoginScreen } from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
    LoginScreen:{ screen: LoginScreen },
    HomeScreen:{screen: HomeScreen}
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default createAppContainer(AppNavigator);