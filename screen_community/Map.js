import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//탭으로 전환되는 화면이지만 헤더바(ActionBar같은)를 가지려면 StackNavigator여야 함.
//물론 헤더바모양을 컴포넌트로 직접 만들수도 있지만 나중에 확장성을 고려하여
//StackNavigator로 제작하되 화면이 1개짜리로 제작
const Stack= createStackNavigator();

const Map= ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" component={Screen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Map;

//실제 화면 클래스
class Screen extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text>MAP</Text>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});