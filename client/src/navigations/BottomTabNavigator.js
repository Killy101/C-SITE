import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {COLORS, routes} from '../conts';
import {HomeScreen, ChatScreen, MapScreen, ManageAccountScreen} from '../views/screens';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';
import CustomTabBarButton from '../views/components';
import CustomTabBar from '../views/components';
import {useNavigation} from '@react-navigation/native';
import PostScreen from '../views/screens/PostScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === routes.HOME) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === routes.CHAT) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === routes.POST) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === routes.MANAGE_ACCOUNT) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.CHAT}
        component={ChatScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.POST}
        component={PostScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.MANAGE_ACCOUNT}
        component={ManageAccountScreen}
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          headerShown: true,
          tabBarButton: props => (
            <CustomTabBarButton route="settings" {...props} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                  size={30}
                  color={COLORS.dark}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
