
import Modal from 'react-native-modal';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  Text,
  Alert,
  State
} from 'react-native';
import { debug, sin, SlideInDown } from 'react-native-reanimated';

import { useState,useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            RN-Boiler Plate from null.
            {'\n\n'}
            Ana Ekran
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
         
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
         
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;