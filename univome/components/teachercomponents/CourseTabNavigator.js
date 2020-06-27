import React ,{Component } from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { GiftedChat ,Feather} from 'react-native-gifted-chat';
import { Icon } from 'react-native-elements'
class ChatScreen extends Component{
    
    constructor(props){
        super(props);
        this.state={
            messages:[
                {"_id": "59552edd-e004-4ea5-be25-65127e420c5f", "createdAt": '2020-06-24T18:50:45.744Z', "text": "This feature can be used to make announcements, raise queries,share fun facts with the classmates , and many more interesting things! Type and send to try it now", "user": {"_id": 2,"avatar": "https://cdn3.vectorstock.com/i/thumb-large/48/37/web-developer-design-vector-5884837.jpg"}},
                {"_id": "da172f88-21ab-48bf-9f3a-16eb6b2f73bc", "createdAt": '2020-06-24T18:50:45.744Z', "text": "Welcome to the Student's Control Chat!", "user": {"_id": 2,"avatar": "https://cdn3.vectorstock.com/i/thumb-large/48/37/web-developer-design-vector-5884837.jpg"}},
            ],
        }
        onSend = async (message = []) => {
            console.log(message);
            const newMessages = await GiftedChat.append(this.state.messages, message);
            await this.setState({messages:(newMessages)});
          }    
    }
    static navigationOptions = {
        title: 'Chat',
        tabBarIcon: ({ tintColor }) => (
            <Icon
              name='message-circle'
              type='feather'            
              size={22}
              iconStyle={{ color: tintColor }}
            />
          ) 
};
        

    
    render(){
        return(
            <GiftedChat
    showUserAvatar={true}
    showAvatarForEveryMessage={true}
    messages={ this.state.messages }
    onSend={ message => onSend(message) }
    scrollToBottom
        scrollToBottomComponent={() => (
          <Ionicons name='ios-arrow-round-down' size={30} color='#ff0000' />
        )}
        // renderActions={() => (
        //   <Feather
        //     // style={styles.uploadImage}
        //     onPress={this.uploadImage}
        //     name='image'
        //     size={30}
        //     color='#000'
        //   />
        // )}
    user={ {
        _id: 1,
        avatar:'https://placeimg.com/140/140/any',
    } }
  />
        );
    }
}
class AssignmentScreen extends Component{
    static navigationOptions = {
        title: 'Assignment',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name='file-pdf'
              type='font-awesome-5'            
              size={22}
              iconStyle={{ color: tintColor }}
            />
          ) 
    };
    constructor(props){
        super(props);
        this.state={
            messages:[


            ],
        }
    }
    render(){
        return(
            <View>
                <Text>This opens up the Assignment Tab</Text>
            </View>
        );
    }
}
const TabNavigator=createBottomTabNavigator({
    Chat: ChatScreen,
    Assignment:AssignmentScreen 
},
    {
      tabBarOptions:{
        // activeBackgroundColor: 'white',
        // inactiveBackgroundColor: 'black',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }  
);
export default TabNavigator;