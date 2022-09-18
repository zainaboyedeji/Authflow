import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn('facebook')
        n
      }
      const onSignInGoogle = () => {
        console.warn('google')
      }
      const onSignInApple = () => {
        console.warn('apple')
      }
  return (
   <>
 <CustomButton text="Sign In FACEBOOK" onPress={onSignInFacebook} bgColor="E7EAF4" fgColor="#4765A9"/>

<CustomButton text="Sign google" onPress={onSignInGoogle}  bgColor="FAE9EA" fgColor="#DD4D44"/>

<CustomButton text="Sign apple" onPress={onSignInApple} bgColor="e3e3e3" fgColor="#363636"/>


   </>
  )
}

export default SocialSignInButtons