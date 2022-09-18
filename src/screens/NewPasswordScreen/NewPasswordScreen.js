import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/index';
import CustomButton from '../../components/CustomButton/index';
import Auth from 'aws-amplify';


const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();



  const onSubmitPress = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);

      navigation.navigate('SignIn')
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
        <Text style={styles.title}>NewPasswordScreen</Text>
        <CustomInput placeholder="Name" value={name} setValue={setName} />
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />

        <CustomButton text="Submit" onPress={onSubmitPress} />



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

export default NewPasswordScreen;