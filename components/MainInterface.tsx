import { View, Text,ScrollView, Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import { styled } from 'nativewind'

import FeaturedRows from './FeaturedRows';

//to show image data from sanity clients
export default function Groups() {
const StyledScroll=styled(ScrollView);


return (
        <FeaturedRows/>
    
  )
}// <FeaturedRow id={1234}title='Tasty Discounts' description='Sounds like some tasty stuff' />
        //<FeaturedRow id={12345}title='Offers near you' description='Need something NOW??' /> 