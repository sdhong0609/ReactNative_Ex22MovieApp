import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';

//단순히 스타일링된 화면의 일부를 보여주는 컴포넌트이므로 간단히 함수형으로 제작
const BigCatalog= (props)=>{
    // console.log('aaaa : ' + props.movie.large_cover_image);
    return(
        <TouchableOpacity
            activeOpacity={0.9} //터치할때의 투명정도 0.0 ~ 1.0
            onPress={ ()=>{ props.onPress(props.movie.id) } }>
            {/* 네트워크 이미지를 사용할때 사이즈가 없으면 안보임 */}
            <Image
                source={{uri: props.movie.large_cover_image}}
                // 가로 사이즈를 디바이스의 너비와 같게 설정하기
                style={{width: Dimensions.get('window').width, height:300}}></Image>

            {/* 영화 제목, 개봉일 등의 정보 표시 [이미지 위에 글씨들이 있기에 absolute포지션 사용하여 겹쳐지도록] */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    {/* 장르정보 genres 배열의 문자열을 , 구분자로 붙여서 하나의 문자열로 리턴해주는 기능 메소드:join() */}
                    <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start',
    },
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',      
        marginLeft:4,
        backgroundColor:'#e70915',
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity:0.8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8,
    },
    labelGenres:{
        fontSize:12,
        color:'white',
        padding:8,
    },
});

export default BigCatalog;