import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//로그인 관련 화면 컴포넌트들 import
import Login from '../screen_login/Login';
import SignUp from '../screen_login/SignUp';
import ResetPW from '../screen_login/ResetPW';

const Stack= createStackNavigator();

// LoginNav는 단순 Navigator 컴포넌트이기에 함수형 컴포넌트로 만들면 더 간결함
export default LoginNav=()=>{
    return(
        <Stack.Navigator screenOptions={ {headerShown:false} }>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="ResetPW" component={ResetPW}></Stack.Screen>
        </Stack.Navigator>
    )
}

// export default class LoginNav extends Component{
//     render(){
//         return(
//             <Stack.Navigator screenOptions={ {headerShown:false} }>
//                 <Stack.Screen name="Login" component={Login}></Stack.Screen>
//             </Stack.Navigator>
//         )
//     }
// }