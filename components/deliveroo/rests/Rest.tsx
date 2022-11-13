import { View, Text,ScrollView } from 'react-native'

import React from 'react'
import {styled} from 'nativewind'
import RestaurantCard from './RestaurantCard'
import {client} from '../../../utils/client'
import { urlFor } from '../../../utils/client'
import { useState,useEffect } from 'react'
const Rest = ({}) => {
  const [restaurant,setRestaurants]=useState([]);
  //use '` tfor queries
    useEffect(()=>{
      client.fetch(`
        *[_type=="restaurant" && id == $id] 
        {
          ...,
          restaurants[]->{
            ...,

          },
        }[0]
      `)


    /*the[0] symbolizes only the first item to show i think */
    },[])


  const Scroll=styled(ScrollView);

  return (
    <View>
      <Scroll horizontal contentContainerStyle={{paddingHorizontal:12}} showsHorizontalScrollIndicator={false} className="pt-4" >
        <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title='MyCard' genre='Evil' rating={3.5} address='gobyhereaddress' dishes={["papapinini", "lolupilo"]} desc="another restaurant card" long={12.3} lat={1234.5} />
        </Scroll>
    </View>
  )
}

export default Rest