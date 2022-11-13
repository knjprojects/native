import { View, Text,TouchableOpacity,Image } from 'react-native'
import { styled } from 'nativewind'
import React from 'react'
import {MapPinIcon} from "react-native-heroicons/solid"
import { StarIcon } from 'react-native-heroicons/outline';
export default function RestaurantCard({
    id,imgUrl,title,genre,rating,address,desc,dishes,long,lat}:
    {id:number,imgUrl:string,title:string,genre:string,rating:number,address:string,dishes:string[],desc:string,long:number,lat:number}) {
    const Img=styled(Image);
    const Vew= styled(View);
    const Tex=styled(Text); 
    //change the string to imgUrl
     return (
  <TouchableOpacity>
    <Vew className="bg-white">
      <Img source={{uri:imgUrl,height:100,width:140}} className="rounded-sm" />
    </Vew> 
    <Vew className='px-3 pb-4'>
      <Tex className='font-bold text-lg pt-2'>{title}</Tex>
      <Vew className='flex-row items-center space-x-1'>
        <StarIcon size={25} color="green" opacity={0.5}/>
        <Tex className='text-xs text-gray-500'>
         <Tex className='text-green-500'>{rating} *{genre}</Tex>
        </Tex>
        </Vew>
      <Vew className="space-x-1 flex-row">
        <MapPinIcon size={25} color="#5aab"/>
        <Tex>Nearby * {address}</Tex>
      </Vew>  
    </Vew>

  </TouchableOpacity>
  )
}