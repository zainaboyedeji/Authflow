import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/index';
import CustomButton from '../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {

  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code);

      navigation.navigate('SignIn')
    } catch (e) {
      Alert.alert('Ooops', e.message)
    }
  };

  const onResendPress = async (data) => {
    try {
      await Auth.resendSignUp(data.username);


    } catch (e) {
      Alert.alert('Ooops', e.message)
    }
  };

  const onSignInPress = () => {

    navigation.navigate('Home')
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput placeholder="Enter your code" value={code} setValue={setCode} />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />


        <CustomButton text="Resend Code" onPress={onResendPress} type="TERTIARY" />
        <CustomButton text="Back to sign in" onPress={onSignInPress} type="TERTIARY" />

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

export default ConfirmEmailScreen;