import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home';
import App from '../../App';
import {NavigationContainer} from '@react-navigation/native';
import HOC from '../Chapters/HOC';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HOC" component={HOC} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default Navigation;
