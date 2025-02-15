import { Container } from './style'
import { Text } from '../Text'

interface ButtonProps {
  children: React.ReactNode
  onPress: () => void
  disabled?: boolean
}


export function Button({ children, onPress, disabled }: ButtonProps) {

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>


  )
}
