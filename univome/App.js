import * as React from 'react';
import { Platform, StyleSheet, Text, View ,StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/LoginComponent';
import HomeTeacher from './components/teachercomponents/HomeTeacher';
import HomeStudent from './components/studentcomponents/HomeStudent';
import CourseTabNavigatorStudent from './components/studentcomponents/CourseTabNavigator';
import CourseTabNavigatorTeacher from './components/teachercomponents/CourseTabNavigator';
import DashboardStudent from './components/studentcomponents/Dashboard';
import DashboardTeacher from './components/teachercomponents/Dashboard';
import Expo from 'expo';
const AppStackNavigator=createStackNavigator({
  
  Login:{ screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#005561",    
      }
        
    })},
  HomeStudent:{ screen: HomeStudent,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ff9100",
      }
    })},
  HomeTeacher:{ screen: HomeTeacher,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ff9100",
        
        
    }
    })},
  CourseTabNavigatorStudent:{ screen: CourseTabNavigatorStudent,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#ff0000",
          color: '#FFFFFF'
      },
      headerTintColor: '#fff',
      })},
  CourseTabNavigatorTeacher:{ screen: CourseTabNavigatorTeacher,
   navigationOptions: ({ navigation }) => ({
   headerStyle: {
   backgroundColor: "#ff0000",
            
          },
   headerTintColor: '#fff',       
       })},
  DashboardTeacher:{ screen: DashboardTeacher,
        navigationOptions: ({ navigation }) => ({
        headerStyle: {
        backgroundColor: "#CCCC00",
                 
               }       
            })},
  DashboardStudent:{ screen: DashboardStudent,
              navigationOptions: ({ navigation }) => ({
              headerStyle: {
              backgroundColor: "#CCCC00",
                       
                     }       
                  })},
  })

export default function App() {
  return (
      <View style={{flex:1,paddingTop: StatusBar.currentHeight}}>
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
