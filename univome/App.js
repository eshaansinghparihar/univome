import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/LoginComponent';
import HomeTeacher from './components/teachercomponents/Home';
import HomeStudent from './components/studentcomponents/Home';
import Expo from 'expo';
const AppStackNavigator=createStackNavigator({
  Login:{ screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#757de8",    
      }
        
    })},
  HomeStudent:{ screen: HomeStudent,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#000051",
      }
    })},
  HomeTeacher:{ screen: HomeTeacher,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#000051",
        
    }
    })}
})
export default function App() {
  return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
      <AppStackNavigator/>
      </View>
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
