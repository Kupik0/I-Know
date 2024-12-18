import * as React from 'react';
import { navigation, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen, screensEnabled } from 'react-native-screens';

import HomeScreen from '../Screen/Anasayfa';
import DetailScreen from '../Screen/Detaylar';
function Stack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">  
  
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Anasayfa' }}  />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detaylar' }}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    );}