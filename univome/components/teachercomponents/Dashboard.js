import React ,{ Component } from 'react';
import {View, StyleSheet, Text, ScrollView, Image,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
class Dashboard extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            user:{},
            image: null,
        }
    }
    static navigationOptions = ({navigation,screenProps})=>({
        title: 'Teacher`s Dashboard',
        headerTintColor:'white',
      });
      componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
          if (status !== 'granted') {
            alert('Sorry,But we need Camera Permissions to make this work!');
          }
        
      };
    
      clickImage = async () => {
        try {
          let result = await ImagePicker.launchCameraAsync({
            //mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
    
    render(){
        const data = this.props.navigation.getParam('data');
        console.log(data);
        return(
            <ScrollView>
            <View style={styles.card}>
                <Card 
                title={data.name}>
                <Image 
                source={(this.state.image===null)?{uri: 'https://placeimg.com/140/140/any'}:{uri:this.state.image}} 
                loadingIndicatorSource={require('../images/logo.png')}
                
                style={styles.image} 
                />
                <TouchableOpacity
            style={styles.uploadimage}
            onPress={this.clickImage}
        >
         <Text style={styles.text}><AntDesign name="upload" size={24} color="black" /></Text>
        </TouchableOpacity>
                </Card>
            </View>
            <View style={styles.card}>
                <Card title='Teacher'>
                <Text style={styles.cardtextbottom}>{data.name}</Text>
                <TouchableOpacity
            style={styles.uploadimage}
            onPress={this.clickImage}
        >
         <Text style={styles.text}><AntDesign name="edit" size={24} color="black" /></Text>
        </TouchableOpacity>
                </Card>
            </View>
            </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius:20,
    marginBottom:30,
},
image: {
    margin: 80,
    width: 160,
    height: 160,
    borderRadius:80,
  },
  cardtext:{
    //marginBottom:20,
    margin:80,
    fontSize:24,
    fontWeight: "bold",
    color:'#000',
},
cardtextbottom:{
  //marginBottom:20,
  marginHorizontal:80,
  justifyContent:'center',
  marginBottom:10,
  fontSize:20,
  fontWeight: "bold",
  color:'#000',
},
uploadimage: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    color: "white",
    borderRadius:20,
    marginBottom:30,
},  
})
export default Dashboard;