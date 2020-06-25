import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/LoginComponent';
import HomeTeacher from './components/teachercomponents/Home';
import HomeStudent from './components/studentcomponents/Home';

const AppStackNavigator=createStackNavigator({
  Login:{ screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#000051",
        //color='white'
    }
        
    })},
  HomeStudent:{ screen: HomeStudent,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#000051",
        //color='white'
    }
        
    })},
  HomeTeacher:{ screen: HomeTeacher,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#000051",
        //color='white'
    }
    })}
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
