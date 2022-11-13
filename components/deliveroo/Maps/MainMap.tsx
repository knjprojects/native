import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE}from 'react-native-maps'
import { GOOGLE_API_KEY } from '../../../environments';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const {width,height}=Dimensions.get('window');
const ASPECT_RATIO=width / height;
const LAT_DELTA=0.02;
const LONG_DELTA=LAT_DELTA * ASPECT_RATIO;
const INITIAL_POSITION={
  latitude: 40.767110,
  longitude: 73.979704,
  latitudeDelta:LAT_DELTA,
  longitudeDelta:LONG_DELTA,
};
const MainMap = () => {
  return (
    <View>
      <MapView style={{flex: 1,height:height,width:width}} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} region={{          latitude: 42.882004,          longitude: 74.582748,          latitudeDelta: 0.0922,          longitudeDelta: 0.0421        }}        showsUserLocation={true}      /> 
     
    <View>
       <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
    />
    </View>
    </View>

  )
}

export default MainMap