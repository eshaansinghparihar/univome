import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      user:this.props.navigation.getParam('data').user,
      course:this.props.navigation.getParam('data').course
    }
}
  static navigationOptions = {
    title: 'Tab',
    headerTintColor:'white',
  };
  componentDidMount(){
        const data  = this.props.navigation.getParam('data');
      this.setState({user:data.user,
      course:data.course,
     }, () => {
       console.log(this.state);
   });
   }
  componentWillMount(){
     const data  = this.props.navigation.getParam('data');
          this.setState({user:data.user,
     course:data.course,
         }, () => {
       console.log(this.state);
 });
  }
  render(){
    const data = this.props.navigation.state.params;
    console.log(JSON.stringify(data));

    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Chat') {
                iconName = focused ? 'ios-chatboxes' : 'ios-chatbubbles';
              } else if (route.name === 'Assignment') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }else if (route.name === 'Test') {
                iconName = focused ? 'ios-checkbox-outline' : 'ios-create';
              }else if (route.name === 'Dashboard') {
                iconName = focused ? 'ios-contact' : 'ios-albums';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Chat" data={this.state.user} component={HomeScreen} />
          <Tab.Screen name="Assignment" component={SettingsScreen} />
          <Tab.Screen name="Test" component={HomeScreen} />
          <Tab.Screen name="Dashboard" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
          );
        }
  
}
export default TabNavigator;