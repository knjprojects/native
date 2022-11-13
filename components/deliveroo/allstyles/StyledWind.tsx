
import { ScrollView, Image,StyleSheet,View,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Chip } from "react-native-paper";
import React from 'react'
import { NativeWindStyleSheet,styled } from 'nativewind';

export default function CatTitle({title}:{title:string}) {
  const Tex=styled(Text);
  return (
    <View>
    <Tex className="text-xs mt-1 bottom-1 left-1 text-black font-bold">{title}</Tex>
    </View>
  )
}

/*export default StylesComp
/*

export const Spacer = styled.View`
  padding: 10px;
`;

export const ArrowHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CatHolder = styled.Text`
  color: #002d4b;
  font-weight: 600;
  font-size: 22px;
`;

export const IngredientHolder = styled.View`
  height: 60px;
  width: 100%;
  border-radius: 20px;
  background-color: #e3e3e3
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Ingredient = styled.Text`
  color: black;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
`;

export const SpacerLess = styled.View`
  padding: 6px;
`;

export const DescriptionButton = styled.View`
  padding: 20px;
  height: 60px;
  background-color: #4db065;
  border-radius: 10px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DescriptionButtonHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 17px;
`;*/