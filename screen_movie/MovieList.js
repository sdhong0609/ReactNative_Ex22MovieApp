import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BigCatalogList from '../components_movie/BigCatalogList';
import SmallCatalogList from '../components_movie/SmallCatalogList';

export default class MovieList extends Component{
    render(){

        //영화정보를 제공해주는 open API 사용 [미국의 토렌트사이트 api - yts]
        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
 
        // 평점순 영화 정보 불러오는 url 
        const ratingUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
 
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

        return(
            //리스트할 내용이 한 화면을 넘어서므로 ScrollView 컴포넌트 사용 (스크롤뷰는 기본 flex:1)
            <ScrollView style={style.root}>
                {/* 1. 인기순 영화리스트 [큰 카탈로그 형식] */}
                {/* 큰 카탈로그형식 리스트의 작업이 다소 복잡하니 별도의 .js 컴포넌트로 만들어서 작업 분리 */}
                <BigCatalogList
                    url={bigUrl}
                    //BigCatalogList컴포넌트에게 onPress 속성으로 함수를 전달하기
                    //그 함수는 클릭한 BigCatalog의 id를 전달받아
                    //MovieDetail컴포넌트로 화면을 이동하는 기능을 가지고 있음.      //id를 전달(객체로)....식별자와 변수명이 같으면 생략 가능... {id} 이렇게..
                    onPress={ (id)=>{ this.props.navigation.navigate('MovieDetail', {id:id, }) } }></BigCatalogList>

                {/* 2. 최신등록 순 영화리스트 [작은 카탈로그 형식] */}
                <SmallCatalogList title="최신등록순" url={recentUrl} onPress={ this.goDetailScreen }></SmallCatalogList>

                {/* 3. 평점 순 영화리스트 [작은 카탈로그 형식] */}
                <SmallCatalogList title="평점순" url={ratingUrl} onPress={this.goDetailScreen}></SmallCatalogList>

                {/* 4. 다운로드 순 영화리스트 [작은 카탈로그 형식] */}
                <SmallCatalogList title="다운로드순" url={downloadUrl} onPress={this.goDetailScreen}></SmallCatalogList>
            </ScrollView>
        )
    }

    //영화세부정보화면으로 전환하는 기능 메소드
    goDetailScreen= (id)=>{
        this.props.navigation.navigate('MovieDetail', {id})
    }

    //이 컴포넌트가 화면에 보여질 때 자동으로 1번 호출되는
    //라이프사이클 메소드
    componentDidMount(){
        //헤더영역의 옵션설정
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>{return (
                <TouchableOpacity style={{marginRight:16}} onPress={ ()=>this.props.navigation.toggleDrawer() }>
                    <Image source={require('../Images/ic_menu.png')}></Image>
                </TouchableOpacity>
            ) },
            headerLeft: ()=>(
                <TouchableOpacity
                    style={{flexDirection:'row', marginLeft:16, alignItems:'center'}}
                    onPress={ async ()=>{
                        //디바이스에 저장된 이메일정보 제거
                        await AsyncStorage.removeItem('email');
                        //로그인 페이지로 이동
                        this.props.navigation.replace('Intro');
                    }}>

                    <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            )
        });
    }

}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#feffff'},
});