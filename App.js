import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AccountPage from './src/Account'
import HomePage from './src/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AccountPage" component={AccountPage} options={{headerShown:true }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:true }} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;