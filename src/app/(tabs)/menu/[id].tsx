import { View, Text,Image,StyleSheet, Pressable} from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams,Stack } from 'expo-router'
import products from '@assets/data/products'
import { defaultimage } from '@/components/ProductListItem'
import Button from '@/components/Button'



const sizesarray =['S','M','L','XL'];


const ProductDetails = () => {
  const Addtocart = ()=>{
    console.warn(`selected size is ${cureentselected}`)
  }

  const[cureentselected,setcureentselected]=useState('M');

    const {id}=useLocalSearchParams();
    const product = products.find((p)=> p.id.toString() === id);

    if(!product){
      return <Text>no product found sorry</Text>
    }

  return (
    <View style={style.conatiner} >
       <Stack.Screen options={{title:product.name}}/>
       <Image source={{uri:product.image || defaultimage}} style={style.image}/>
       <Text style={style.selectsize}>Select size</Text>
       <View style={style.sizes}>
        {sizesarray.map(size =>(

        <Pressable onPress={()=>{setcureentselected(size)}} style={[style.size, {backgroundColor: size === cureentselected? 'lightgray':'white',}]} key={size}> 
          <Text style={[style.tsize,{color: size===cureentselected? 'black': 'gray'}]}>{size}</Text> 
        </Pressable> ))}
        </View>

      <Text style={style.price}>${product.price}</Text>
      <Button onPress={Addtocart} text='add to cart'/>
    </View>
  )
}

export default ProductDetails;


const style= StyleSheet.create({
  conatiner:{
    flex:1,
  backgroundColor:'white',
  padding:10
  },
  image:{width:"100%",aspectRatio:1},
  selectsize:{fontSize:22,fontWeight:'bold', width:'100%',textAlign:'center',marginTop:8},
  price:{fontSize:24,fontWeight:'bold', marginTop:'auto'
  },
  sizes:{flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:'center',
    marginTop:12
},
size:{backgroundColor:'lightgrey',
  width:50,
  aspectRatio:1,
  borderRadius:25,
  alignItems:'center',
  justifyContent:'center'
},
tsize:{fontSize:18,
  fontWeight:'bold'
}
})