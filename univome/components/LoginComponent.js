import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView ,Alert,Button,TouchableOpacity,Text, ImageBackground } from 'react-native';
import { Input,Card, Icon,  CheckBox} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {USERS} from '../shared/users';
import HomeTeacher from './teachercomponents/Home';
import HomeStudent from './studentcomponents/Home';
class Login extends Component {

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
            'Coming Soon',
            'This Feature is Coming Soon. For Registrations contact College Admin',
            [
            {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();}, style: 'cancel'},
            ],
            { cancelable: false }
        );
    }
    resetLogin=()=>{
        this.setState({
            username:'',
            password:'',
        })
    }
    verifyLogin=({navigation})=>{
        //this.state.users.map(el=>{console.log(el);})
        //(USERS.some(el=>{el.email===this.state.username && el.password===this.state.password}))?(<View><Text>Login Successful</Text></View>):(<View><Text>Login Failed</Text></View>);
        if(USERS.filter((user,index)=>user.email===this.state.username)[0]){
            {
                const userDetails=USERS.filter(user=>user.email===this.state.username)[0];
                if(userDetails.password===this.state.password){
                    console.log('Login Succesful');
                    this.setState({
                        user:userDetails,
                    })
                    console.log(this.state);
                    if(userDetails.teacher){
                        //navigation.navigate('Settings')
                    }
                    else if(!(userDetails.teacher)){

                    }
                }
                else{
                    Alert.alert(
                        'Invalid Credentials',
                        'The Username and Password Entered Do Not Match.Please try again.',
                        [
                        {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();}, style: 'cancel'},
                        ],
                        { cancelable: false }
                    );
                }
            }
           
        }
        else{
            Alert.alert(
                'Invalid User',
                'User Not Found ! Signup is required before Login-In',
                [
                {text: 'OK', onPress: () => {console.log('OK Pressed');this.resetLogin();}, style: 'cancel'},
                ],
                { cancelable: false }
            );
        }
    }
    handleLogin() {
        this.setState({username: this.state.username, password: this.state.password});
        //console.log(JSON.stringify(this.state));
        this.verifyLogin();
    }

    render() {
        const image = { uri: "https://lh3.googleusercontent.com/VlX6gdRjxluiU4QReKhPW4zVZQdxmcQqzrLkzDBUZGWqqIVOZz4ZQxqDGObMR0KvJKxxC4v-yGdnpFHJkHBFWWffkuWZBbsg9sxGVOI=w0" };
        return (
            <SafeAreaView style={styles.container}>
                
                <View style={styles.text}>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    //containerStyle={styles.formInput}
                    />
                </View>
                <View style={styles.text}>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    //containerStyle={styles.formInput}
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
                                    onPress={() => this.handleLogin()}
                        >
                                    <Text style={styles.text}> Login </Text>
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
                                    <Text style={styles.text}> Register </Text>
                            </TouchableOpacity>
                    
                </View>
                <View style={styles.text}>
                {(this.state.user.teacher)?(<HomeTeacher data={this.state.user}/>):(<HomeStudent data={this.state.user}/>)}
                </View>
               
             </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
    justifyContent:'center',
    marginHorizontal: 16,

    },
    formInput: {
        margin: 10,
        flexDirection: 'row',
        
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
        backgroundColor: '#000',
        padding: 10,
        color: "white",
        borderRadius:20,
        marginBottom:30,
    },
    register: {
        alignItems: 'center',
        backgroundColor: '#000051',
        padding: 10,
        color: "white",
        borderRadius:20,
        marginBottom:30,
    },
});
export default Login;