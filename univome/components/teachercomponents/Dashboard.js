import React ,{ Component } from 'react';
import {View , Text} from 'react-native';

class Dashboard extends Component{
    static navigationOptions = ({navigation,screenProps})=>({
        title: 'Teacher`s Dashboard',
        headerTintColor:'white',
      });
    render(){
        return(
            <View>
                <Text>This opens up the Dashboard for Teacher</Text>
            </View>
        );
    }
}
export default Dashboard;