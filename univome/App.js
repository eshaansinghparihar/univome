import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/LoginComponent';
import HomeTeacher from './components/teachercomponents/Home';
import HomeStudent from './components/studentcomponents/Home';

const AppStackNavigator=createStackNavigator({
  Login:Login,
  HomeStudent:HomeStudent,
  HomeTeacher:HomeTeacher,
})
export default function App() {
  return (
      
      <AppStackNavigator/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
  
});
