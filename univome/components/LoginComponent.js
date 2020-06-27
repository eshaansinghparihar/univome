import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView ,Alert,Button,TouchableOpacity,Text, ImageBackground,TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { Input,Card, Icon,  CheckBox} from 'react-native-elements';
import {USERS} from '../shared/users';
import HomeStudent from './studentcomponents/HomeStudent';
import HomeTeacher from './teachercomponents/HomeTeacher';

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerTintColor:'white',
      };
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: true,
            user:[],
        }
    
    };
    registerUser=()=>{
        Alert.alert(
            'Register Coming Soon !  ',
            'This Feature is Coming Soon. For Registrations contact College Admin',
            [
            {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();}, style: 'cancel'},
            ],
            { cancelable: false }
        );
    }
    resetUser=()=>{
        this.setState({
            user:[],
            username:'',
            password:'',
        })
    }
    resetLogin=()=>{
        this.resetUser();
    }
    handleLogin() {
        this.setState({username: this.state.username, password: this.state.password});
        //console.log(JSON.stringify(this.state));
        this.verifyLogin();
    }
    verifyLogin=()=>{
        this.setState({username: this.state.username, password: this.state.password});
        if(USERS.filter((user,index)=>user.email===this.state.username)[0]){
            
                const userDetails=USERS.filter(user=>user.email===this.state.username)[0];
                if(userDetails.password===this.state.password){
                    console.log('Login Succesful');
                    this.setState({
                        user:userDetails,
                    })
                    console.log(this.state);
                    if(userDetails.teacher){
                       console.log('Teacher Profile');
                    }
                    else if(!(userDetails.teacher)){
                        console.log('Student Profile');
                       
                    }
                    return true;
                }
                else{
                    Alert.alert(
                        'Invalid Credentials',
                        'The Username and Password Entered Do Not Match.Please try again.',
                        [
                        {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();this.resetUser}, style: 'cancel'},
                        ],
                        { cancelable: false }
                    );
                    return false;
                }
            
           
        }
        else{
            Alert.alert(
                'Invalid User',
                'User Not Found ! Signup is required before Login-In',
                [
                {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();this.resetUser}, style: 'cancel'},
                ],
                { cancelable: false }
            );
            return false;
        }
    }

    render() {
        const image = { uri: "https://lh3.googleusercontent.com/VlX6gdRjxluiU4QReKhPW4zVZQdxmcQqzrLkzDBUZGWqqIVOZz4ZQxqDGObMR0KvJKxxC4v-yGdnpFHJkHBFWWffkuWZBbsg9sxGVOI=w0" };
        return (
            
            <SafeAreaView style={styles.container}>
                 {/* <Card style={styles.cardimage}
                    image={require('./images/logo.png')}
                  />
                   */}
                  
                <View style={styles.text}>
                <Input
                    // style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:20,padding:30 ,marginBottom:30}}
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                </View>
                <View style={styles.text}>
                <Input
                    // style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,borderRadius:20,padding:30,marginBottom:30}}
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    />
                </View>
                <View style={styles.formButton}>
                    {/*<Button
                        onPress={() => this.handleLogin()}
                        title="Login"
                        color="#000"
                        />*/}
                        <TouchableOpacity
                                    style={styles.login}
                                    onPress={() => {
                                        this.handleLogin();
                                        if(this.verifyLogin()){
                                            if((this.state.user.student)){
                                                this.props.navigation.navigate('HomeStudent',{user:this.state.user});
                                                this.resetUser();
                                            }
                                            else if(this.state.user.teacher){
                                                this.props.navigation.navigate('HomeTeacher',{user:this.state.user});
                                                this.resetUser();
                                            }
                                        }
                                    }}
                        >
                                    <Text style={styles.text}><AntDesign name="right" size={28} color="white" /></Text>
                            </TouchableOpacity>
                    
                </View>
                <View style={styles.formButton}>
                    {/*<Button
                        onPress={() => this.handleLogin()}
                        title="Login"
                        color="#000"
                        />*/}
                        <TouchableOpacity
                                    style={styles.register}
                                    onPress={() => this.registerUser()}
                        >
                                    <Text style={styles.text}><AntDesign name="up" size={28} color="white" /> </Text>
                            </TouchableOpacity>
                    
                </View>
             </SafeAreaView>
             
        );
    }

}

const styles = StyleSheet.create({
    container: {
    justifyContent:'center',
    marginHorizontal: 60,
    marginTop:200,
    margin: 10,
    },
    formInput: {
        marginBottom: 30,
        
        
    },
    formButton: {
        margin: 10,
    },
    image: {
        flexDirection:'column',
        resizeMode: "cover",
        justifyContent: "center",

      },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
      },
    login: {
        alignItems: 'center',
        backgroundColor: '#000051',
        padding: 10,
        color: "white",
        borderRadius:20,
        marginBottom:30,
    },
    register: {
        alignItems: 'center',
        backgroundColor: '#e64a19',
        padding: 10,
        color: "white",
        borderRadius:20,
        marginBottom:30,
    },
    card:{
        backgroundColor: '#000051',
    },
    cardimage:{
        backgroundColor: '#000051',
        padding:10,
        borderRadius:20,
        marginBottom:30
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    
});
export default Login;