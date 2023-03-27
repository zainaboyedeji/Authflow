import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/index';
import CustomButton from '../../components/CustomButton/index';
import { useNavigation } from '@react-navigation/native'
import Auth from '@aws-amplify/core';

const ForgotPasswordScreen = () => {

  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = async (data) => {

    try {
      await Auth.forgotPassword(data.username);

      navigation.navigate('NewPassword')
    } catch (e) {
      Alert.alert('Ooops', e.message)
    }
  };

  const onSignInPress = () => {

    navigation.navigate('SignIn')
  };




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>ForgotPasswordScreen</Text>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />

        <CustomButton text="Send" onPress={onSendPressed} />



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

export default ForgotPasswordScreen;