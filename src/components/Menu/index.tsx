import { FlatList } from 'react-native'

import { products } from '../../mocks/products'

import { Image, Product, ProductDetails } from './styles'
import { Text } from '../Text'


export function Menu() {
  return (
    <FlatList


      data={products}
      style={{ marginTop: 32 }}
      keyExtractor={(product) => product._id}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      renderItem={({ item: product }) => (
        <Product>
          <Image
            source={{ uri: `http://localhost:3001/uploads/${product.imagePath}` }}
          />



          <ProductDetails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </ProductDetails>

        </Product>


      )}
    />



  )
}

