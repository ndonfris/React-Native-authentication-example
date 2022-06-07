import React, {useContext} from "react"
import { NavigationContainer } from "@react-navigation/native"
import {authContext} from "./contexts/AuthContext";


interface Props {
    Stack: any;
}

export default function NavigationStacks({Stack}: Props) {

    const {state, dispatch} = useContext(authContext);

    return (
        <NavigationContainer>
            <Stack.Navigator options={{headerShown: false, genstureEnabled: true}}>
                (state.isLoggedIn 
                    ? <Stack.Screen name="Home" component={Home} options={{genstureEnabled: false}} />
                    :
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Create" component={Create} />
                )
            </Stack.Navigator>
         </NavigationContainer>
    );
}




