import { View, Text ,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { styled } from 'nativewind';
import CategoryCard from './CategoryCard'
import {client} from'../../../utils/client';
import { urlFor } from '../../../utils/client';

//import PropTypes from "prop-types";


const CatQueryHandler = ({query}:{query:string}) => {
    const Scroll=styled(ScrollView);
   // const [errors, setError]=useState([]);
    const [cats, setCats]=useState([]); 
    useEffect(()=>{
            
            const query='*[_type == "category"]';//stored the query, this is the collectionyou createdwith sanity ui
        //const fetchData=(query:string)=>{//created an async function 
          //inside useffect since useffect by default cannot be async
        
            client.fetch(query).
            then((value)=>{
            setCats(value);
          //    console.log(value); 
            }).catch(((error: any)=>{
                console.log(error);
            })
        );
    });
/* else if(query=="featured"){//add anothery here
        useEffect(()=>{
            const query='*[_type == "categories"]';//stored the query, this is the collectionyou createdwith sanity ui
        
            client.fetch(query).then((value)=>{
            setRecipes(value);
            })   
        });
    }
    else if(query=='all'){
        useEffect(()=>{
            const query='*[_type == "categories"]';//stored the query, this is the collectionyou createdwith sanity ui
            client.fetch(query).then((value)=>{
            setRecipes(value);
    
            })   
        });
    }*/

    
    
    
return (
    <Scroll horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15,paddingTop:10}} className="bg-gray-400">
    <CategoryCard key={0}id ={0}imgUrl="https://links.papareact.com/wru" title={"Bhai wtf"}  status="Hot" /> 
    {cats.map((recipe:any)=>{
        const fruit = urlFor(recipe.imgUrl).url();
    
      //arr.push(up);//pushed it to an array to extract the string value from
      //the string function value, because imgurl wouldnt load without soecifcially STRING Url
        return (
            <CategoryCard key ={recipe.id} id={recipe.id} imgUrl={fruit} title={recipe.title}  status={recipe.status}/>
        )})
    }</Scroll>
);
}
export default CatQueryHandler