
import CatQueryHandler from './CatQueryHandler';
import { StyleSheet,Image,TouchableOpacity } from 'react-native';

import { Text, View } from '../theme/Themed';
//import thunk from "redux-thunk";
import {createStore} from 'redux'
//connect the store to our app, we need a provider
import {Provider} from 'react-redux'


const initialState={
    counter:0,
    query:''
}
const reducer=(state=initialState,action:any)=>{
    switch(action.type){
        case 'nearby':
        return {
            counter:
                state.counter+1
        }
        case '':
        return {
            counter:
                state.counter-1
        }
    }
    return state
    
}
const store=createStore(reducer)


export default function Cats() {
return (
    <Provider store={store}>
        <CatQueryHandler query="cat"/>
    </Provider>
)
}


