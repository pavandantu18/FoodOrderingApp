import products from '@/assets/data/products';
import { StyleSheet,View,Text,Image } from 'react-native';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      {products.map((product) => {
        return (
          <ProductListItem product={product} />
        )
      })
  }
    </View>
  );
}