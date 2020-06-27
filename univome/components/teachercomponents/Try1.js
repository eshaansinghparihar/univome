import React ,{Component } from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { GiftedChat ,Feather} from 'react-native-gifted-chat';

class ChatScreen extends Component{
    static navigationOptions = {
        title: 'Chat',
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name='ios-chatboxes'          
              size={24}
              color='gray'
            />
          ) 
    };
    constructor(props){
        super(props);
        this.state={
            
        }
    onSend = async (message = []) => {
            console.log(message);
            const newMessages = await GiftedChat.append(this.state.messages, message);
            await this.setState({messages:(newMessages)});
          }    

    }
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
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
              name='ios-list-box'          
              size={24}
              color='gray'
            />
          ) 
    };
    constructor(props){
        super(props);
        this.state={
            messages=[


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
const Chat=createBottomTabNavigator({
    Chat: ChatScreen,
    Assignment:AssignmentScreen 
}, {
    tabBarOptions: {
        activeBackgroundColor: 'tomato',
        inactiveBackgroundColor: 'gray',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
    }

});
export default Chat;