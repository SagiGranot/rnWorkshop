import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GeoScreen from '../screens/GeoScreen';
import GesturesScreen from '../screens/GesturesScreen';
import GyroScreen from '../screens/GyroScreen';
import AccelerometerScreen from '../screens/AccelerometerScreen';

const GeoStack = createStackNavigator({
  Geo: GeoScreen,
});

GeoStack.navigationOptions = {
  tabBarLabel: 'Geo Location',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const GestureStack = createStackNavigator({
  Gestures: GesturesScreen,
});

GestureStack.navigationOptions = {
  tabBarLabel: 'Gestures',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const GyroStack = createStackNavigator({
  Gyro: GyroScreen,
});

GyroStack.navigationOptions = {
  tabBarLabel: 'Gyroscope',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const AccelerometerStack = createStackNavigator({
  Accelerometer: AccelerometerScreen,
});

AccelerometerStack.navigationOptions = {
  tabBarLabel: 'Accelerometer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  GeoStack,
  GestureStack,
  GyroStack,
  AccelerometerStack
});
