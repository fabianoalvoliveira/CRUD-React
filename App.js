import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListPage from './src/pages/ListPage/';
import AddItemPage from './src/pages/AddItemPage/';
import ItemDetailsPage from './src/pages/ItemDetailsPage/';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "List">
        <Stack.Screen 
          name="List" 
          component={ListPage} 
          options = {{
            headerTintColor: "#2196F3"
          }}/>
        <Stack.Screen 
          name="AddItem" 
          component={AddItemPage} 
          options = {{
            headerTintColor: "#2196F3"
          }}/>
        <Stack.Screen 
          name="ItemDetails" 
          component={ItemDetailsPage} 
          options = {{
            headerTintColor: "#2196F3"
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
