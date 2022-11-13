//import { StyleSheet } from 'react-native';


import { RootTabScreenProps } from '../../types';
import { NativeWindStyleSheet } from 'nativewind';
import { styled } from 'nativewind';
import { StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image } from 'react-native';

import { Text, View } from '../../components/deliveroo/theme/Themed';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const StyledView = styled(View);//this is how we are able to style our components using nativewind
  const StyledText = styled(Text);
  const StyledImage=styled(Image);
  const nav=useNavigation();
  useLayoutEffect(()=>{//this effect activates when the page ois loaded initially, so
    //this  is how i chAnge the title of my screens, or not show it at all
    nav.setOptions({
     // headerTitle:"Bhaii"
    headerShown:false,
    })
  },[]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Top line without nativewind style but regular styles, added it inside safearea view so it doesnt go off into the top bar</Text>
      </SafeAreaView>
      <StyledView lightColor="#eee" darkColor="rgba(255,255,255,0.1)" className="text-white scroll-contain">
        <StyledText className="text-black">Tab One styled with nativewind view wrapper and text dawggiiee</StyledText>
        <StyledText>Bhaoi
          <StyledText className="space-between"> wtf u doin</StyledText>
        </StyledText>
        <StyledText className="text-purple-500">LIve nativewind call without stylesheet</StyledText>
        <StyledView>
          <StyledImage className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{uri:"https://links.papareact.com/wru"}}/>
      </StyledView>
    </StyledView>
    <View>
      <Text>Still going good</Text>
    </View>
  
  </View>
  );
}
//<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />







//the stylesheets are not necessary when you can nstyle in line with nativewind/babel
NativeWindStyleSheet.create({
  styles: {
    "text-black": {
      color: "#089",
    },
    "ios:text-blue-500": {
      width: "rgb(59 130 246)",
    },
    "scroll-contain":{
      backgroundColor:"#099",
      flex:3,
      alignItems: 'center',
    justifyContent: 'center',
    },
    "side-text-view":{
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  },
  masks: {
    "ios:text-blue-500": 8192,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
