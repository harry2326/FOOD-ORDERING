import {View} from 'react-native';
import products from '../../../assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';



export default function MenuScreen() {
  const product=products[1];
  return (<View>
    <ProductListItem products={products[0]}/>
    <ProductListItem products={products[1]}/>
  </View>

    
  );
}


