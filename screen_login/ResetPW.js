import React, {Component} from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class ResetPW extends Component{

    // 탭선택에 따른 화면구성을 위해 탭글씨를 배열로 state에 저장
    state={
        tabs:["이메일", "전화번호"],
        tabIndex: 0, //현재 선택된 탭 번호를 저장하는 변수
        //탭 선택에 따른 안내메세지
        message:[
            "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
            "전화번호를 입력하면 임시 비밀번호를 보내드립니다.",
        ],
    }

    //탭 선택에 따른 tabIndex변경 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex: index});
    }

    render(){
        return(
            <View style={style.root}>
                {/* 1. content */}
                <View style={style.content}>
                    {/* 1.1 자물쇠 이미지 표시 영역 */}
                    <View style={style.lockImageContainer}>
                        <Image source={require('../Images/lock.png')}></Image>
                    </View>

                    {/* 1.2 타이틀 글씨 */}
                    <Text style={style.title}>로그인에 문제가 있나요?</Text>

                    {/* 1.3 탭선택에 따른 안내 메세지 */}
                    <Text style={style.message}>{ this.state.message[this.state.tabIndex] }</Text>

                    {/* 1.4 탭 버튼 [커스텀 컴포넌트 사용] - state.tabs배열의 개수만큼 탭컴포넌트 제작 */}
                    <View style={style.tabContainer}>
                        {
                            this.state.tabs.map( (value, index)=> <TabComponent key={"Tab"+index} selected={this.state.tabIndex==index} label={value} onPress={ ()=> this.setTabIndex(index) }></TabComponent>)
                        }
                    </View>
                    
                    {/* 1.5 정보입력 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>
                    
                    {/* 1.6 확인버튼 */}
                    <View style={{width:'100%', margin:16}}>
                        <Button title="확인" onPress={ ()=> Alert.alert('임시비밀번호가 발송되었습니다.', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경해주시기 바랍니다.') }></Button>
                    </View>

                </View>

                {/* 2. footer */}
                <View style={style.footer}>
                    <Text style={style.footerText} onPress={ ()=>this.props.navigation.goBack() }>로그인화면으로 돌아가기</Text>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#feffff'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopColor:'#d3d3d3',
        borderTopWidth:1,
        padding:8,        
    },
    footerText:{
        color:'#3796ef',
        textAlign:'center',
    },
    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderRadius:500, //이미지의 절반크기를 넘어가면 무조건 원모양이 됨
        borderColor:'#292929',
        margin:16,
    },
    title:{
        fontSize:16,
        marginBottom:16,
    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    }
});