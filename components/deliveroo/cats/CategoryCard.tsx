import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import CatText from '../allstyles/StyledWind';
export default function CategoryCard({id,imgUrl, title,status}:{id:number,imgUrl:string,title:string,status:string}) {
    const StyledView=styled(View);
    const StyledTouch=styled(TouchableOpacity);
const Img=styled(Image);//i needed to wrap touchableopacity in a text widget to render this component
//<Img source ={{uri:imgUrl,height:100, width:100}} className="bg-white"/>
return (
<Text> <StyledView className="h-100 w-200 space-x-2 mx-2 bg-white">
        <StyledTouch className="relative mr-2">{/*this is how we get even side spacing within parents */}
           {/**add image back here */}
            <CatText title={title}></CatText>
            <Image source={{uri:imgUrl,height:60,width:70}} />
        </StyledTouch>
    </StyledView>
</Text>
)
}//    <StyledText className="mt-1 bottom-1 left-1 text-black font-bold">{title}</StyledText>