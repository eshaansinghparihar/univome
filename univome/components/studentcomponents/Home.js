import React, { Component } from 'react';
import { View, Button, StyleSheet,Text ,Alert} from 'react-native';
import { Card, Icon, Input, CheckBox } from 'react-native-elements';
class HomeStudent extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <View>
                <Text>hello ! {this.props.data.name}</Text>
                <Text>This is the Homepage for Students</Text>
                
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
        

export default HomeStudent;