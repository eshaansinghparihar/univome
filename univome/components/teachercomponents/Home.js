import React, { Component } from 'react';
import { View, Button, StyleSheet,Text ,Alert} from 'react-native';
import { Card, Icon, Input, CheckBox } from 'react-native-elements';
class HomeTeacher extends Component {
    static navigationOptions = ({navigation})=>({
        
        title: `Teacher's Home`,
        headerTintColor: 'white',
      });
    constructor(props) {
        super(props);
    }
    render(){
  
        const user = this.props.navigation.getParam('user','');
        console.log("Navigation+>"+this.props.navigation.state.params);
        return(
            <View>
                <Text>hello ! {user.name}</Text>
                <Text>This is the Homepage for Teachers</Text>
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
        

export default HomeTeacher;