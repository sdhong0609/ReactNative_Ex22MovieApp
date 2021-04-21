import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';

//외부 라이브러리 AsyncStorage import
import AsyncStorage from '@react-native-async-storage/async-storage';

//단순하게 AsyncStorage에 로그인한 적이 있는지(이메일 저장여부 확인)에 따라
//로그인화면으로 이동하거나 메인화면으로 이동하도록 코딩만 하면 되므로
//간단하게 함수형 컴포넌트로 제작
export default Intro= ( props )=>{ //파라미터 : 부모로부터 전달된 속성들(properties) 받음

    //AsyncStorage의 저장된 이메일 정보가 있는지 확인
    //비동기 방식(별도 스레드가 동작하는 방식)으로 데이터를 가져오기에 시간차가 발생함
    //그래서 곧바로 = 대입연산자로 결과를 받지 못함
    //결과를 받았을 때 자동으로 특정 함수가 발동하도록 약속(promise)하는 문법 - .then()
    AsyncStorage.getItem('email').then( (value)=> {
        if(value) props.navigation.replace('MainDrawerNav'); //로그인정보가 있다면 MainDrawer화면으로 이동
        else props.navigation.replace('LoginNav');           //로그인정보가 없다면 Login화면으로 이동
    } );

    return(
        <View style={style.root}>
            {/* 화면에 아무것도 안보이면 사용자가 멈췄다고 오해할 수도 있어서 */}
            {/* 로그인정보 가져오는 동안에 보여질 프로그레스가 필요함 */}
            <ActivityIndicator size="large" color="green"></ActivityIndicator>
            
        </View>
    )
}

// export default class Intro extends Component{
//     render(){
//         return(
//             <View style={style.root}>
//                 <Text>Intro</Text>
//                 <Button title="Go login" onPress={ ()=>{ this.props.navigation.navigate('LoginNav') } }></Button>
//             </View>
//         );
//     }
// }

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});