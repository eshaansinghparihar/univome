import React ,{ Component } from 'react';
import {View , Text} from 'react-native';

class Dashboard extends Component{
    static navigationOptions = ({navigation,screenProps})=>({
        title: 'Student`s Dashboard',
        headerTintColor:'white',
      });
    render(){
        return(
            <View>
                <Text>This opens up the Dashboard for Student</Text>
            </View>
        );
    }
}
export default Dashboard;