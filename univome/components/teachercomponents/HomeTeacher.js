import React, { Component } from 'react';
import { View,ScrollView, Button, StyleSheet,Text ,FlatList,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Card, Tile, Icon } from 'react-native-elements';
import { COURSES } from '../../shared/courses';

class HomeTeacher extends Component {
    static navigationOptions = ({navigation})=>({
        
        title: `Teacher's Home`,
        headerTintColor: 'white',
      });
    constructor(props) {
        super(props);
        this.state={
            user:{},
            course:{},
        }
    }
    componentDidMount(){
        this.setState({
            user:this.props.navigation.getParam('user',''),

        })
    }
    render(){
  
        const user = this.props.navigation.getParam('user','');
        var teacherid=user.id;
        const RenderCourses=({item,index})=>{
            return(
                
                 <Animatable.View animation="fadeInRightBig" duration={2000}>                
                     <Tile
                        key={index}
                        title={item.subname}
                        imageSrc={{ uri: item.img_uri}}
                        caption={item.section}
                        fontWeight='bold'
                        titleStyle={{color:'white',fontWeight:"bold"}}
                        captionStyle={{color:'white',fontWeight:"bold"}}
                        featured
                        onPress={() => {
                            this.setState({
                                course:item}
                            //    ,() => {console.log(this.state);}
                            );
                            this.props.navigation.navigate('CourseTabNavigatorTeacher',{data:this.state});
                            }}
                         />
                 </Animatable.View>
            );
         }
        return(
        <ScrollView>
        <Card style={styles.card}>
        <Text style={styles.cardtext}>hello ! {user.name}</Text>
        <TouchableOpacity
            style={styles.move}
            onPress={() => this.props.navigation.navigate('DashboardTeacher',{data:this.state.user})}
        >
         <Text style={styles.text}><AntDesign name="rightcircleo" size={38} color="black" /></Text>
        </TouchableOpacity>
        </Card>
        <FlatList data={COURSES.filter((course)=>course.teacher_id===teacherid)} 
        renderItem={RenderCourses}
        keyExtractor={item => item.id.toString()}/>
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
        move: {
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 10,
            color: "white",
            borderRadius:20,
            marginBottom:30,
        },
    });
        

export default HomeTeacher;