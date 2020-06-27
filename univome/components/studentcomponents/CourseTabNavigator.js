import React ,{Component } from 'react';
import {View,Text,ScrollView,Modal, StyleSheet, Picker, Switch, Button,TextInput } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GiftedChat ,Feather} from 'react-native-gifted-chat';
import * as Animatable from 'react-native-animatable';
import { Icon,Tile } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
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
        const data=this.props.navigation.getParam('data');
        console.log(data.course.subname);
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
        //  renderActions={() => (
        //   <Feather
        //  //style={styles.uploadImage}
        //      onPress={this.uploadImage}
        //      name='image'
        //      size={30}
        //      color='#000'
        //    />
        //  )}
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
          showModal:false,
          comment:'',
      }
  }
  toggleModal(){
      this.setState({showModal:!this.state.showModal});
  }
  openModal(){
      this.setState({showModal:true});
  }
  closeModal(){
      this.setState({showModal:false});
  }
  async submitDocument() {
      //Opening Document Picker for selection of one file
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
       
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
        
        this.setState({ document: res });
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          alert('Canceled Upload');
        } else {
          //For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    }
  
  render(){
      return(
          <ScrollView>
              <Animatable.View animation="fadeInRightBig" duration={2000}>                
                   <Tile
                      key={1}
                      title='Assignment I'
                      imageSrc={{ uri: 'https://lh3.googleusercontent.com/proxy/TlkzO_9Y3epAK-0Jrjsu899lzvnnZFmv-1ul9pOglBifxfp9wuaRcKf5ui1wPSIrxOKFNhtN3drmCzxK6K9IWD0bDdLyaIFDz97QJtGw4EI'}}
                      caption="Tap to submit Assignment"
                      fontWeight='bold'
                      featured
                      titleStyle={{color:'white',fontWeight:"bold"}}
                      captionStyle={{color:'white',fontWeight:"bold"}}
                      onPress={() => this.openModal()}
                      />
                      <Tile
                      key={2}
                      title='Assignment II'
                      imageSrc={{ uri: 'https://www.itl.cat/pngfile/big/106-1068753_funny-minimalistic-oranges-grey-background-background-cartoon.png'}}
                      caption="Tap to submit Assignment"
                      titleStyle={{color:'black',fontWeight:"bold"}}
                      captionStyle={{color:'black',fontWeight:"bold"}}
                      featured
                      onPress={() => this.openModal()}
                      />
                      <Tile
                      key={3}
                      title='Assignment III'
                      imageSrc={{ uri: 'https://cdn.wallpapersafari.com/96/40/4r5iaA.jpg'}}
                      caption="Tap to submit Assignment"
                      titleStyle={{color:'white',fontWeight:"bold"}}
                      captionStyle={{color:'white',fontWeight:"bold"}}
                      featured
                      onPress={() => this.openModal()}
                      />
                       <Modal animationType = {"slide"} transparent = {false}
                          visible = {this.state.showModal}
                          onDismiss = {() => this.closeModal() }
                          onRequestClose = {() => this.closeModal() }>
                                  <View style = {styles.modal}>
                                  <Text style = {styles.modalTitle}>Submit Your Assignment</Text>
                                  <TextInput
                                  placeholder="Enter Your Comments Here"
                                  onChangeText={comment => this.setState({comment})}
                                  value={this.state.comment}
                                  multiline
                                  numberOfLines={16}
                                  
                                  />
                                  <TouchableOpacity
                                  style={styles.close}
                                  onPress = {() =>{this.submitDocument(); 
                                  }}
                                  
                                  ><Text><AntDesign name="upload" size={24} color="black" /></Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                  style={styles.close}
                                  onPress = {() =>{this.closeModal(); 
                                  }}
                                  ><Text><AntDesign name="closecircleo" size={24} color="tomato" /></Text>
                                  </TouchableOpacity>
                                  </View>
                   </Modal>
               </Animatable.View>
          </ScrollView>
      );
  }
}
class TestScreen extends Component{
  static navigationOptions = {
      title: 'Test',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='gauge'
            type='entypo'            
            size={22}
            iconStyle={{ color: tintColor }}
          />
        ) 
  };
  constructor(props){
      super(props);
      this.state={
          showModal:false,
      }
  }
  toggleModal(){
      this.setState({showModal:!this.state.showModal});
  }
  openModal(){
      this.setState({showModal:true});
  }
  closeModal(){
      this.setState({showModal:false});
  }
  async submitDocument() {
      //Opening Document Picker for selection of one file
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
       
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
        
        this.setState({ document: res });
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          alert('Canceled Upload');
        } else {
          //For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    }
  
  render(){
      console.log(this.state.showModal)
      return(
          <ScrollView>
          <Animatable.View animation="fadeInRightBig" duration={2000}>                
               <Tile
                  key={1}
                  title='Internal Assessment I'
                  imageSrc={{ uri: 'https://cdn.wallpapersafari.com/64/85/dGfQ4L.png'}}
                  caption="Tap to submit Test"
                  fontWeight='bold'
                  featured
                  titleStyle={{color:'white',fontWeight:"bold"}}
                  captionStyle={{color:'white',fontWeight:"bold"}}
                  onPress={()=>this.openModal()}
                  />
                  <Tile
                  key={2}
                  title='Internal Assessment II'
                  imageSrc={{ uri: 'https://c4.wallpaperflare.com/wallpaper/749/281/320/minimalism-shark-fish-bones-wallpaper-preview.jpg'}}
                  caption="Tap to submit Test"
                  titleStyle={{color:'gray',fontWeight:"bold"}}
                  captionStyle={{color:'gray',fontWeight:"bold"}}
                  featured
                  onPress={()=>this.openModal()}
                  />
                  <Tile
                  key={3}
                  title='Internal Assessment III'
                  imageSrc={{ uri: 'https://wallpapersprinted.com/download/2/minimal_design-wallpaper-2560x1600.jpg'}}
                  caption="Tap to submit Test"
                  titleStyle={{color:'white',fontWeight:"bold"}}
                  captionStyle={{color:'white',fontWeight:"bold"}}
                  featured
                  onPress={()=>this.openModal()}
                  />
                  <Modal animationType = {"slide"} transparent = {false}
                          visible = {this.state.showModal}
                          onDismiss = {() => this.closeModal() }
                          onRequestClose = {() => this.closeModal() }>
                                  <View style = {styles.modal}>
                                  <Text style = {styles.modalTitle}>Submit your Answer Sheet</Text>
                                  <TextInput
                                  placeholder="Enter Your Comments Here"
                                  onChangeText={comment => this.setState({comment})}
                                  value={this.state.comment}
                                  multiline
                                  numberOfLines={16}
                                  
                                  />
                                  <TouchableOpacity
                                  style={styles.close}
                                  onPress = {() =>{this.submitDocument(); 
                                  }}
                                  
                                  ><Text><AntDesign name="upload" size={24} color="black" /></Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                  style={styles.close}
                                  onPress = {() =>{this.closeModal(); 
                                  }}
                                  ><Text><AntDesign name="closecircleo" size={24} color="tomato" /></Text>
                                  </TouchableOpacity>
                                  </View>
                   </Modal>
           </Animatable.View>
      </ScrollView>
      );
  }
}
const TabNavigator=createBottomTabNavigator({
  Chat: ChatScreen,
  Assignment:AssignmentScreen,
  Test:TestScreen 
},
  {
    tabBarOptions:{
      //activeBackgroundColor: 'white',
      // inactiveBackgroundColor: 'black',
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }  
);
const styles=StyleSheet.create({
  modal: {
      justifyContent: 'center',
      margin: 20,
      marginVertical:60
   },
   modalTitle: {
       fontSize: 24,
       fontWeight: 'bold',
       backgroundColor: '#ff0000',
       textAlign: 'center',
       color: 'white',
       marginBottom: 20
   },
   modalText: {
       fontSize: 18,
       margin: 10
   },
   close: {
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      marginVertical:20,
      color: "#ff0000",
      borderRadius:20,
      marginBottom:30,
  },
})
export default TabNavigator;