import { View, Text } from './deliveroo/theme/Themed'
import { ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { styled } from 'nativewind'
import Rest from './deliveroo/rests/Rest'
import Cats from './deliveroo/cats/Cats'

export default function FeaturedRow() {
    const StyleView=styled(View);
    const StyleText=styled(Text);
    const Scroll=styled(ScrollView);
    
    //to use if else conditions we use function calls(regular components) that return our components
    const MyFeatures=({id}:{id:string}) =>{
        if (id=="rest") {
            return <Rest />;
        }
        else if(id=="categories")
            return <Cats/>; 
        else if(id=="")return <View>
                <Cats />
                <Rest />
        </View>
    }
return (
    <Scroll contentContainerStyle={{paddingBottom:100}} className="bg-gray-400"><Text>TextAbove in regular scroll, Categories cOntainer</Text>
        <View>
            <StyleView className="rounded-full mt-4 flex-row space-x-2 justify-between px-4">
                <StyleText className="font-extrabold text-xl">{"title"}</StyleText>
                <ArrowRightIcon color={"#3D00CC"}/>
            </StyleView>
            <MyFeatures id=""/>
        </View>
    </Scroll>
)
}//<RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title='MyCard' genre='Evil' rating={3.5} address='gobyhereaddress' dishes={["papapinini", "lolupilo"]} desc="another restaurant card" long={12.3} lat={1234.5} />