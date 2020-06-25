import React, { Component } from 'react';
import { View,ScrollView, Button, StyleSheet,Text ,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Tile, Icon } from 'react-native-elements';
import { COURSES } from '../../shared/courses';
function RenderCourse(props){
        console.log(props.courses);
        const RenderCourses=props.courses.map((course)=>{
            return(
                
                 <Animatable.View animation="fadeInRightBig" duration={2000}>                
                     <Tile
                         title={course.subname}
                         caption={course.section}
                          featured
                         />
                 </Animatable.View>
                //<View />
            );
         })
    return(
        <ScrollView>
        {RenderCourses}
        </ScrollView>
        
    
);
    }
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
        var teacherid=user.id;
        return(
        <ScrollView>
        <Card style={styles.card}>
        <Text style={styles.cardtext}>hello ! {user.name}</Text>
        </Card>
        <RenderCourse courses={COURSES.filter((course)=>course.teacher_id===teacherid)} />
        </ScrollView>
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
        },
        cardtext:{
            marginBottom:20,
            margin:40,
            fontSize:24,
            fontWeight: "bold",
            color:'#000',
        },
        card: {
            alignItems: 'center',
            backgroundColor: '#000051',
            padding: 10,
            color: "white",
            borderRadius:20,
            marginBottom:30,
        },
    });
        

export default HomeTeacher;