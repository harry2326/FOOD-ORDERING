import {FlatList} from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
import { Stack } from 'expo-router';



export default function MenuScreen() {
 
  return (

<>
<Stack.Screen options={{title:'MENU'}}/>
<FlatList data={products} 
 renderItem={({item})=> <ProductListItem products={item}/>}
 numColumns={2} contentContainerStyle={{gap:10,padding:10}}
 columnWrapperStyle={{gap:10}}
/>
 
</>  
  );
}


