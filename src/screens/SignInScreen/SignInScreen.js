import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../../assets/images/logo.png"
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import Auth from 'aws-amplify';


const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);

    } catch (e) {
      Alert.alert('oops', e.message);
    }
    setLoading(false);
  };
  const onForgotPasswordPressed = () => {


    navigation.navigate('ForgotPassword');
  }

  const onNoAccount = () => {
    navigation.navigate('SignUp');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text={loading ? "Loading" : "Sign In"} onPress={onSignInPressed} />

        <CustomButton text="Forgot Passowrd" onPress={onForgotPasswordPressed} />

        <SocialSignInButtons />

        <CustomButton text="Dont have an account? Create one" onPress={onNoAccount} type="TERTIARY" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
  },
});

export default SignInScreen;