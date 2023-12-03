import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}








// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from './src/views/screens/LoginScreen';
// import RegistrationScreen from './src/views/screens/RegistrationScreen';
// import HomeScreen from './src/views/screens/HomeScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from './src/views/components/Loader';
// import WelcomeScreen from './src/views/screens/WelcomeScreen';
// import ForgotPassword from './src/views/screens/ForgotPassword';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   return (
//     <NavigationContainer>
//           <Stack.Navigator
//             initialRouteName={WelcomeScreen}
//             screenOptions={{headerShown: false}}>
//             <Stack.Screen  name="WelcomeScreen"   component={WelcomeScreen}/>
//             <Stack.Screen name="RegistrationScreen"component={RegistrationScreen}/>
//             <Stack.Screen name="LoginScreen" component={LoginScreen} />
//             <Stack.Screen name="HomeScreen" component={HomeScreen} />
//             <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//           </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;