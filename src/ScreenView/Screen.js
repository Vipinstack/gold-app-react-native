import React from 'react'
import {SafeAreaView} from 'react-native'
import {Styles} from './screen.style'


const Sceen = ({children, style}) => {
  return (
   <SafeAreaView style={[Styles.screen, style]}>
       {children}
   </SafeAreaView>
  )
}

export default Sceen