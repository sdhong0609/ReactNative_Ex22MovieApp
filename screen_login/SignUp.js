import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//커스텀 컴포넌트 import
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{

    //탭작업시에 탭이 여러개일 수도 있고 탭에 따라 보여지는
    //내용물도 달라야 하기에 탭을 배열로 만들어서 index번호로
    //어느 탭인지 구분하도록 설계
    state={
        tabs: ["전화번호", "이메일"],
        tabIndex:0, //현재 선택된 탭번호
    }

    //선택된 탭번호를 변경하는 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex: index});
    }

    render(){
        return(
            <View style={style.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 전화번호/이메일 중 원하는 정보로 회원가입 할 수 있도록 탭으로 구성 */}
                    <View style={style.tabContainer}>
                        {/* 탭컴포넌트는 [비밀번호재설정화면]에서도 사용할 것이어서 */}
                        {/* 별도의 커스텀 컴포넌트로 만들어서 사용 */}
                        {/* <TabComponent label="전화번호"></TabComponent>
                        <TabComponent label="이메일"></TabComponent> */}

                        {/* 배열의 map()메소드로 컴포넌트 출력 */}
                        {
                            this.state.tabs.map( (value, index)=>{
                                return <TabComponent label={value} selected={this.state.tabIndex==index} key={"Tab"+index} onPress={ ()=>{ this.setTabIndex(index) } }></TabComponent>
                            } )
                        }

                    </View>

                    {/* 1.2 정보입력 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.3 이메일 일때만 보이는 패스워드 입력박스 */}
                    {
                        // if문법 사용이 불가함.
                        //if(this.state.tabIndex==1){}

                        // && 연산자 - 앞의 조건이 true일때만 뒤에 코드가 실행됨
                        (this.state.tabIndex==1) && <InputComponent placeholder="비밀번호"></InputComponent>
                    }

                    {/* 1.4.1 전화번호 탭일때만 보여지는 버튼 */}
                    {
                        (this.state.tabIndex==0) && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={ ()=>{ this.setTabIndex(1) } }></Button></View>
                    }

                    {/* 1.4.2 이메일 탭일때만 보여지는 버튼 */}
                    {
                        (this.state.tabIndex==1) && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={ this.signup }></Button></View>
                    }

                    {/* 1.5 [전화번호] 탭 선택시에 왜 전화번호를 입력하도록 하는지 알려주는 메세지 표시 */}
                    {
                        (this.state.tabIndex==0) && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }

                </View>

                {/* 2. footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                        이미 계정이 있으신가요? <Text style={style.footerLogin} onPress={ ()=> this.props.navigation.goBack() }>로그인</Text>
                    </Text>
                </View>                

            </View>
        )
    }

    //회원가입 완료 버튼 클릭시 실행될 메소드
    signup= ()=>{
        //원래는 서버에 '이메일', '비밀번호', '전화번호'를 전송하여 회원DB에 저장해야 함. [fetch()]

        //지금은 그냥 연습이므로 - 다시 로그인 페이지로 돌아가기!
        this.props.navigation.goBack();
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopColor:'#D3D3D3',
        borderTopWidth: 1,
        padding:8,
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center',
    },
    footerLogin:{
        color:'#3796ef',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,        
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    }
});