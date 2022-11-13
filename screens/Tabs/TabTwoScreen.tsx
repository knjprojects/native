import { StyleSheet,Image,TouchableOpacity,Animated,TextInput,ImageBackground  } from 'react-native';

import { Text, View} from '../../components/deliveroo/theme/Themed';
import { useRef,useEffect } from 'react';
import {createStore} from 'redux'
//connect the store to our app, we need a provider
import {Provider} from 'react-redux'
import ReduxScreen from '../../components/try/ReduxScreen';
import Assistant from '../../components/Assistant';
const initialState={
    counter:0
}
/*const menuItems = [
    {name: "Angus Burger", price: 8.99, category: 'burger'},
    {name: "Tuna Steak Burger", price: 15.00, category: 'burger'},
    {name: "Bacon Burger", price: 11.50, category: 'burger'},
    {name: "Southwest Chicken Burger", price: 9.99, category: 'burger'},
    {name: "Mozzarella Burger", price: 12.50, category: 'burger'},
    {name: "Cesar Salad", price: 6.50, category: 'salad'},
    {name: "BBQ Chicken Salad", price: 13.99, category: 'salad'},
    {name: "Garden Salad", price: 9.99, category: 'salad'},
    {name: "Veggie Lasagna", price: 17.99, category: 'pasta'},
    {name: "Spaghetti & Meatballs", price: 17.99, category: 'pasta'},
    {name: "Fettuccine Alfredo", price: 17.99, category: 'pasta'},
 ];*/
const reducer=(state=initialState,action:any)=>{
    switch(action.type){
        case 'INCREASE_COUNTER':
        return {
            counter:
                state.counter+1
        }
        case 'DECREASE_COUNTER':
        return {
            counter:
                state.counter-1
        }
    }
    return state
    
}
const store=createStore(reducer)

  
export default function TabTwoScreen() {

return (

    <View><Provider store={store}>
    <ReduxScreen/>

    <Assistant/>
    <View>
    <TextInput autoCorrect={true} placeholder="type here" />
    <ImageBackground source={{uri:'https://reactjs.org/logo-og.png',height:200,width:220}} resizeMode="cover"></ImageBackground>
    </View>
</Provider></View>

);
}
