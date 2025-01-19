import { categories } from '../../mocks/categories'
import { Category, Icon } from './styles'
import { Text } from '../Text'

import { FlatList } from 'react-native'

export function Categories() {
  return (

    <FlatList
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => (
        <Category key={category._id}>
          <Icon>
            <Text >{category.icon}</Text>
          </Icon>

          <Text size={14} weight='600'>{category.name}</Text>
        </Category>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
    />

  )
}

