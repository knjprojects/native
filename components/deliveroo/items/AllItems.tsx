import { View, Text,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { styled } from 'nativewind'
import { PrinterIcon, FunnelIcon } from 'react-native-heroicons/solid'
import {client} from'../../../utils/client';
import CategoryCard from '../cats/CategoryCard'
import { urlFor } from '../../../utils/client';
import PropTypes from "prop-types";

export default function AllItems() {
return (
    <View>
    <Text>AllItems</Text>
    </View>
)
}