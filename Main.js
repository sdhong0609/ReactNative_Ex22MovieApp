// ## 앱 제작 주요 작업 순서 ########################
// 0) react naviagtion, AsyncStorage 라이브러리 설치
// 1) Intro 화면 컴포넌트 제작
// 2) Login 관련 화면 컴포넌트와 Navigator 제작
// 3) 앱의 주요기능 및 서브기능 관련 작업
//  3.1) 앱의 주요기능(영화정보제공) 화면
//  3.2) 앱의 서브기능(커뮤니티 등) 화면
// ##################################################

import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//보여질 화면들 import
import Intro from './Intro';                            //기존 로그인 여부를 체크하는 Intro화면 컴포넌트
import LoginNav from './navigators/LoginNav';           //로그인 관련 스크린들을 가지고 있는 Navigator
import MainDrawerNav from './navigators/MainDrawerNav'; //앱의 주요화면들을 가진 Navigator

//앱 전체 화면들을 전환할 수 있는 최상위 네비게이터객체 생성
const RootStack= createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>                
                <RootStack.Navigator screenOptions={ {headerShown:false} }>
                    {/* 1. 우선 Intro.js와 로그인 관련화면 */}
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                    <RootStack.Screen name="LoginNav" component={LoginNav}></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={MainDrawerNav}></RootStack.Screen>
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}