import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

//리스트뷰에서 보여줄 항목 1개의 모양을 가진 컴포넌트 import
import BigCatalog from './BigCatalog';

export default class BigCatalogList extends Component{

    state={
        data:[],
    }

    render(){
        return(
            <View style={style.container}>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={this.state.data}
                    renderItem={ (obj)=>{return <BigCatalog movie={obj.item} onPress={this.props.onPress}></BigCatalog>} }
                    keyExtractor={ (item, index)=>{return "Big"+index} }>
                </FlatList>
            </View>
        )
    }

    //영화정보 받아오는 기능 메소드
    loadData= ()=>{
        //MovieList.js로부터 전달받은 URL을 통해
        //json으로 인기 영화정보를 읽어오기
        fetch(this.props.url)
        .then( (res)=>{return res.json()} ) //받은 결과를 json파싱해서 객체로 리턴
        .then( (json)=>{ this.setState({data: json.data.movies}) } );
        // .then( (response)=>{return response.text()} ) //받은 결과를 문자열 텍스트로 변환
        // .then( (responeText)=> { alert(responeText) } );
        
    }

    //이 컴포넌트가 화면에 보여질 때 자동으로 호출되는 생명주기 메소드
    componentDidMount(){
        if(this.props.url) this.loadData();
    }

}

const style= StyleSheet.create({
    container:{height:300, marginBottom:8},
});