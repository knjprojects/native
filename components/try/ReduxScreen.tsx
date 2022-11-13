import { View, Text, Touchable, TouchableOpacity ,} from 'react-native'
import {createStore} from 'redux'
import React,{useState,useEffect} from 'react'
//connect the store to our app, we need a provider
import {connect} from 'react-redux'

const ReduxScreen = (props:any) => {
    //our component receives redux props from the redux store provider parent component
    /**/
return (
<View>
    <><TouchableOpacity onPress={()=>/** */props.increaseCounter()}>
        <View><Text>{props.counter}</Text></View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>/** */props.decreaseCounter()}>
        <View><Text>{props.counter}</Text></View>
    </TouchableOpacity>
    </>
</View>
)
}
//this maps the states we get from redux to our props
function mapStateToProps(state:any){
    return {
        counter:state.counter
    }
}
//this maps our action dispatches to our props
function mapPropsToDispatches(dispatch:any){
    return {
        increaseCounter:()=>dispatch({type:"INCREASE_COUNTER"}),
        decreaseCounter:()=>dispatch({type:"DECREASE_COUNTER"}),
    }
}
export default connect(mapStateToProps,mapPropsToDispatches)(ReduxScreen)
//this is how we manage state in redux, connecting our states, actions and props




