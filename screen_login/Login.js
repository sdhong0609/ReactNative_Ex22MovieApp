import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//AsyncStorage 라이브러리 클래스 import
import AsyncStorage from '@react-native-async-storage/async-storage';

//공통사용 커스텀 컴포넌트들 import
import InputComponent from '../components/InputComponent';

export default class Login extends Component{

    state={
        email:'', //입력된 이메일값을 저장하는 변수
        pw:'',    //입력된 비밀번호값을 저장하는 변수
    }

    render(){
        return(
            <View style={style.root}>
                {/* 크게 2개 영역 */}
                {/* 1. 로그인 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 로고 */}
                    <Text style={style.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/비밀번호 입력박스 */}
                    {/* 입력박스는 스타일작업을 해야 하는데 다른 .js문서에서도 사용빈도가 높음. */}
                    {/* 각 문서마다 style작업을 하는 것이 비효율적임 */}
                    {/* 스타일까지 모두 적용한 새로운 컴포넌트를 만들어서 사용하는 것 권장 */}
                    <InputComponent onChangeText={this.changeEmail} secureTextEntry={false} placeholder="이메일"></InputComponent>
                    <InputComponent onChangeText={this.changePW} secureTextEntry={true} placeholder="비밀번호"></InputComponent>

                    {/* 1.3 비밀번호 재설정 : Text컴포넌트 onPress속성 가능함 */}
                    <Text style={style.resetPW} onPress={ ()=> this.props.navigation.navigate('ResetPW') }>비밀번호 재설정</Text>

                    {/* 1.4 로그인버튼 */}
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button title="로그인" color="#3796ef" onPress={this.login}></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text style={style.signup}>
                        계정이 없으신가요? <Text style={style.signupLink} onPress={ ()=> this.props.navigation.navigate('SignUp') }>가입하기</Text>
                    </Text>
                </View>

                {/* 2. footer영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}>MovieApp by mrhi</Text>
                </View>
            </View>
        )
    }

    //TextInput에 글씨가 변경될 때마다 그 글씨를 저장하는 작업을 하는 메소드
    changeEmail= (value)=>{
        this.state.email= value; //setState()가 아니어서 화면갱신 안됨
    }

    changePW= value=> this.state.pw= value;    

    //로그인버튼 클릭 반응하는 콜백메소드
    login= async ()=>{
        //원래는 서버에 전송하는 코드가 있어야 함. [fetch()라이브러리 사용]

        //로그인을 한번 하면 다음에 앱을 실행할 때 다시 로그인하지 않도록 하기 위해
        //디바이스에 영구적으로 데이터를 저장하기
        //AsyncStorage [android의 SharedPreferences와 같은 역할]
        // 가상의 이메일값을 저장하여 로그인 유무만 저장
        await AsyncStorage.setItem('email', this.state.email);

        //로그인이 되었으니 맵의 메인화면인 MovieList 컴포넌트를 가진
        //MovieStack Navigator로 이동하고자 하기 위해 이 네비게이터를 가진
        //MainDrawerNav로 이동 [현재 화면을 finish하기 위해 replace()로 실행]        
        this.props.navigation.replace('MainDrawerNav');
    }
}

//스타일 객체
const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',        
        padding:8, 
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796ef',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    signupLink:{
        color:'#3796ef'
    }
});