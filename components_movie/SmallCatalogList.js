import React,{Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class SmallCatalogList extends Component{

    state={
        data:[], //영화정보들 배열
    }

    render(){
        return(
            <View style={style.container}>
                {/* 서브 타이틀 제목표시 */}
                <Text style={style.title}>{this.props.title}</Text>

                <FlatList                    
                    horizontal={true}
                    data={this.state.data}
                    renderItem={ ( obj )=>{ return ( //obj : 배열의 요소와 배열의 인덱스 번호를 한꺼번에 갖고 있는 객체..여기서 구조분해할당 사용가능
                        <TouchableOpacity
                            onPress={ ()=>{this.props.onPress(obj.item.id)} }
                            style={style.item}
                            activeOpacity={0.9}>
                            <Image source={{uri:obj.item.medium_cover_image}}
                            style={{width:140, height:200}}></Image>
                        </TouchableOpacity>
                    ) } }
                    keyExtractor={ (item, index)=>{return "Small"+index} }>
                </FlatList>
            </View>
        )
    }

    //영화정보 api 정보 읽어오기
    loadData= ()=>{
        fetch(this.props.url)
        .then(res=>res.json()).then(json=>this.setState({data:json.data.movies}))
        // .then(res=> res.text()).then(text=>alert(text));
    }

    componentDidMount(){
        this.loadData();
    }

}

const style= StyleSheet.create({
    container:{marginTop:8, marginBottom:8},
    title:{padding:8, fontSize:16, fontWeight:'bold'},
    item:{paddingLeft:4, paddingRight:4},
});