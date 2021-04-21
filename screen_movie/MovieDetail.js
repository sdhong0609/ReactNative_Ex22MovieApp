import React, { Component } from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{

    state={
        data: null, //영화 상세정보들을 저장할 변수
    }

    render(){
        //영화정보를 fetch할 때까지 시간이 걸리기에
        //fetch된 데이터가 있는지 확인하여 없다면 로딩화면, 있다면 영화정보화면이 보이도록 삼항연산자 사용
        return this.state.data?
        (
            <ScrollView style={style.root}>
                {/* 큰 타이틀 이미지 표시 - MovieList에서 사용했던 커스텀 컴포넌트 사용 */}
                <BigCatalog movie={this.state.data}></BigCatalog>

                {/* 영화정보 출력 영역 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점 : {this.state.data.rating}</Text>
                        <Text>좋아요 : {this.state.data.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 출력영역 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.desc}>{this.state.data.description_full}</Text>
                </View>
            </ScrollView>
        )
        :
        (
            <View style={style.loadingContainer}>
                <ActivityIndicator size='large' color='red'></ActivityIndicator>
            </View>
        )
        // return(
        //     <View style={style.root}>
        //         {/* MovieList로부터 navigate되면서 전달된 Data[id값]확인 */}
        //         {/* <Text>{this.props.route.params.id}</Text> */}
        //         <Text>{this.state.data.title}</Text>

        //         {/* 전달된 id값을 가지고 영화세부정보를 다시 네트워크를 통해 parsing하기  */}
        //     </View>
        // )
    }

    //영화상세정보를 json으로 읽어오는 작업 메소드
    loadData= ()=>{

        //MovieList로부터 navigate되면서 전달된 Data[id값]
        const id= this.props.route.params.id

        //영화상세정보를 yts토렌트사이트에서 제공하는 open api를 이용하여 json으로 읽어오기
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then( (res)=> { return res.json() } )
        .then( (json)=> this.setState({data:json.data.movie}) );
        // .then( (response)=> { return response.text() } )
        // .then( (text)=> alert(text) );
    }

    //이 컴포넌트가 화면에 장착되었을 때 실행되는 생명주기 메소드
    componentDidMount(){
        this.loadData();
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#feffff'},
    loadingContainer:{flex:1, justifyContent:'center', alignItems:'center'},
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16,
        paddingBottom:8,
        paddingLeft:16,
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
    },
    desc:{
        paddingLeft:16,
        paddingRight:16,
    }
});