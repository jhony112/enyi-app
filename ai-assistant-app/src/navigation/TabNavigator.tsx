import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={MainApp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
