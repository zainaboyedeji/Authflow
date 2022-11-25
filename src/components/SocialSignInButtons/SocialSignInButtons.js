import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('facebook')
  }
  const onSignInGoogle = () => {
    console.warn('google')
  }
  const onSignInApple = () => {
    console.warn('apple')
  }
  return (
   <>
      <CustomButton text="Sign In FACEBOOK" onPress={onSignInFacebook} bgColor="blue" fgColor="white"  />

      <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor="green" fgColor="white"  />

      <CustomButton text="Sign In Apple" onPress={onSignInApple} bgColor="black" fgColor="white" />
    </>
  )
}



export default SocialSignInButtons