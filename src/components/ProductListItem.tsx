import { Image, StyleSheet,Text,View} from 'react-native';
import Colors from '../constants/Colors';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';


interface Product {
  image: string;
  name: string;
  price:Float;
  // Add other properties as needed
}

const ProductListItem = ({ products }: { products: Product })=>{
  return(<View style={styles.container}>
    <Image source={{uri:products.image}} style={styles.image}/>
    <Text style={styles.title}>{products.name}</Text>
    <Text style={styles.price}>{products.price}</Text>
  </View>)
}

export default ProductListItem;




const styles = StyleSheet.create({
  container: {
  backgroundColor:'white',
  padding:10,
  borderRadius:20
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
