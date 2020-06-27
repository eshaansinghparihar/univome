import * as React from 'react';
import {useState} from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GiftedChat } from 'react-native-gifted-chat';
import { NavigationContainer } from '@react-navigation/native';
function ChatScreen() {
  const [ messages, setMessages ] = useState([
    {"_id": "59552edd-e004-4ea5-be25-65127e420c5f", "createdAt": '2020-06-24T18:50:60.744Z', "text": "This feature can be used to make announcements, inform about upcoming events, share fun facts with the Students , and many more interesting things! Type and send to try it now", "user": {"_id": 2}},
    {"_id": "da172f88-21ab-48bf-9f3a-16eb6b2f73bc", "createdAt": '2020-06-24T18:50:45.744Z', "text": "Welcome to the Teacher's Control Chat!", "user": {"_id": 2}},
  ]);
  const onSend = async (message = []) => {
    console.log(message);
    const newMessages = await GiftedChat.append(messages, message);
    await setMessages(newMessages);
  }
  return (
    <GiftedChat
    showUserAvatar={true}
    showAvatarForEveryMessage={true}
    messages={ messages }
    onSend={ message => onSend(message) }
    scrollToBottom
        scrollToBottomComponent={() => (
          <Ionicons name='ios-arrow-round-down' size={30} color='#ff0000' />
        )}
    user={ {
        _id: 1,
        avatar:'https://placeimg.com/140/140/any',
    } }
  />
  );
}
function AssignmentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is where you can View all Assignment!</Text>
      <Text>Feature Coming Soon!</Text>
    </View>
  );
}
  
function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is where you can View all Tests !</Text>
      <Text>Feature Coming Soon!</Text>
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
    title: 'Teacher`s Control',
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
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Chat"  component={ChatScreen} />
          <Tab.Screen name="Assignment" component={AssignmentScreen} />
          <Tab.Screen name="Test" component={TestScreen} />
        </Tab.Navigator>
      </NavigationContainer>
          );
        }
  
}
export default TabNavigator;