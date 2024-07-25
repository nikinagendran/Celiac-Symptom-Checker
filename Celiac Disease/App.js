import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SymptomTrackerScreen from './screens/SymptomTrackerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Symptom Tracker" component={SymptomTrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
