
import React from 'react'
import { StyleSheet,Image,TouchableOpacity,Animated,SafeAreaView,Button,Easing } from 'react-native';

import { Text, View } from './deliveroo/theme/Themed';
import { useRef,useEffect } from 'react';


const Assistant = (props:any) => {
  
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
   /* useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 10000,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );*/
    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
     /* Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        easing:Easing.linear,
      }).start();*/
    };
  
    const fadeOut = () => {
      // Will change fadeAnim value to 0 in 3 seconds
    /*  Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000
      }).start();*/
    };
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
      </View>
    </SafeAreaView>
  );
      }
/*<Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default Assistant