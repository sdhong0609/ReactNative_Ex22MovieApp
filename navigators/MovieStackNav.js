import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//보여질 화면들 import
import MovieList from '../screen_movie/MovieList';
import MovieDetail from '../screen_movie/MovieDetail';

//StackNavigator객체 생성
const Stack= createStackNavigator();

//단순 Navigator이기에 간단한 함수형 컴포넌트 제작
export default function MovieStackNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MovieList" component={MovieList}></Stack.Screen>
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}