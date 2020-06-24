import React, { Component } from 'react';
import { View, Button, StyleSheet,Text ,Alert} from 'react-native';
import { Card, Icon, Input, CheckBox } from 'react-native-elements';
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
    resetLogin=()=>{
        this.setState({
            username:'',
            password:'',
        })
    }
    verifyLogin=()=>{
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
        return (
            <View style={styles.container}
            >
                <View>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    //containerStyle={styles.formInput}
                    />
                </View>
                <View>
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    //containerStyle={styles.formInput}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title="Login"
                        color="#000"
                        />
                </View>
                {(this.state.user.teacher)?(<HomeTeacher data={this.state.user}/>):(<HomeStudent data={this.state.user}/>)}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    formInput: {
        margin: 40
    },
    formButton: {
        margin: 60
    }
});
export default Login;