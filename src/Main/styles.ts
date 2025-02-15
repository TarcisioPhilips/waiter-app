import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #FAFAFA;
`

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 32px;
`

export const MenuContainer = styled.View`
  flex: 1;
`

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`

export const FooterContainer = styled.SafeAreaView`
`

