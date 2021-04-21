import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

//단순하게 스타일링된 TextInput을 만들면 되기에
//함수형 컴포넌트로 제작 [함수의 파라미터로 프로퍼티들을 전달받음]

const InputComponent= (props)=>{
    return(
        <View style={style.container}>
            <TextInput
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={ props.onChangeText }
                // selectionColor="#929292"
                // autoCapitalize="none"
                // autoCorrect={false}
                // keyboardType=""
                // placeholderTextColor="#c3c2c8"
                // clearButtonMode="always"
                style={style.input}></TextInput>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        height:40,
        width:'100%',
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1, //부모높이 40dp에 맞추기 위해... 혹은 height:'100%'
        color:'#292929',
    }
});

//const를 export default하려면 이렇게 별도로..작성
export default InputComponent;