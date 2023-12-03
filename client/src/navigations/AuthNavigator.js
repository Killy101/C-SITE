import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, WelcomeScreen, LoginScreen, RegistrationScreen, ForgotPassword} from '../views/screens';
import routes from '../conts/routes';

const Stack = createStackNavigator();
// Navigator, Screen, Group

const AuthNavigator =() =>{

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} 
    initialRouteName={routes.WELCOME}>
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={routes.REGISTER} component={RegistrationScreen} />
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;