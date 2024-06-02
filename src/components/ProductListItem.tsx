import { Image, Pressable, StyleSheet,Text,View} from 'react-native';
import Colors from '../constants/Colors';
import   {Product} from '../types';
import { Link } from 'expo-router';


const defaultimage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png';

type ProductListItemprops ={
  products:Product;
}
const ProductListItem = ({products}:ProductListItemprops)=>{
  return(
    <Link href={`/menu/${products.id}`} asChild>
  <Pressable style={styles.container}>
    <Image source={{uri: products.image || defaultimage}} style={styles.image} resizeMode='contain'/>
    <Text style={styles.title}>{products.name}</Text>
    <Text style={styles.price}>{products.price}</Text>
  </Pressable>
  </Link>)
}

export default ProductListItem;




const styles = StyleSheet.create({
  container: {
    flex:1,
  backgroundColor:'white',
  padding:10,
  borderRadius:20,
  maxWidth:'50%'
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  price:{
    color:Colors.light.tint,
    fontWeight:'bold'

  }
});
