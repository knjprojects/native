import { FontAwesome } from 'expo-vector-icons';

import { SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Image, } from 'react-native';
import { Text,Badge } from 'react-native-paper';

import { RootTabScreenProps } from '../../types';
import { styled } from 'nativewind';
import {MagnifyingGlassIcon,AdjustmentsHorizontalIcon} from "react-native-heroicons/outline";
import { TextInput } from 'react-native';

import Groups from '../../components/MainInterface';

/*{this screen is the deliveroo mainpage starter}*/
export const TabThreeScreen=({ navigation }: RootTabScreenProps<'TabThree'>) =>{
  const StyledView =styled(View);
  const StyledText=styled(Text);
  const StyledImage=styled(Image);
 
  const appname="Rassspberry";
  const nav=useNavigation();
  useLayoutEffect(()=>{//this effect activates when the page ois loaded initially, so
    //this  is how i chAnge the title of my screens, or not show it at all
    nav.setOptions({
     // headerTitle:"Bhaii"
    headerShown:false,
    })
    
  },[]);
  //changing padding variables can affect the rest of the ui unexpectedly
  return (
  <SafeAreaView >
    <StyledView className="mx-2 flex-row bg-white alignItems-center space-x-1">
      <StyledImage className="h-10 w-10 bg-white-300 rounded-full my-1 p-5" source={{uri:"https://links.papareact.com/wru"}}></StyledImage>
      <StyledView className="space-x-1">
        <StyledText className="mx-2 text-gray-400">{"Fresh"}</StyledText>
        <StyledText className="mx-2 font-bold text-xl">{appname}</StyledText>
      </StyledView>
    
      <StyledView className="flex-row px-2 space-x-2 justify-items-end my-4">
        <TextInput keyboardType='default' placeholder='Search'></TextInput>    
      </StyledView>
        
       <MagnifyingGlassIcon size={15} color="#00F"/>
      
        <AdjustmentsHorizontalIcon size={18}color="#00F"/>
        <Badge size={20}  />
       
      
  </StyledView>
    <Groups/>
  
    
  </SafeAreaView>
  );
}
// <View style={{flex:1,height:30,width:50,borderRadius:50,backgroundColor:"yellow",scaleX:2}}></View>





