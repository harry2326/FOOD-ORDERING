import { Image, StyleSheet,Text,View} from 'react-native';
import Colors from '../../constants/Colors';
import products from '../../../assets/data/products';

export default function TabOneScreen() {
  const product=products[1];
  return (

    <View style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>12.99</Text>
    </View>
  );
}

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
