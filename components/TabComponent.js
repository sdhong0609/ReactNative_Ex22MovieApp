import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

//단순하게 스타일링이 된 컴포넌트만 만들면 되기에 함수형 컴포넌트로 제작
const TabComponent= ( props )=>{

    //선택된 탭에 따라 글씨 색상이 변경되므로 
    let color= props.selected? "#292929" : "#929292";    

    //선택된 탭에 따라 아래경계선의 색상도 변경
    style.borderColor= color;

    return (
        <TouchableOpacity style={style} onPress={props.onPress}>
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    )
}

let style={
    flex:1,
    borderBottomWidth:1,
    borderColor:'#929292',
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center',
}

export default TabComponent;