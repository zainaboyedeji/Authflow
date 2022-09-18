import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import Auth from 'aws-amplify';



const ConfirmEmailScreen = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const onRegisterPressed = async (data) => {
    const { username, password, email, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate('ConfirmEmail')
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };
  const onTerm = () => {
    console.warn('on term')
  }
  const onSignInPress = () => {

    navigation.navigate('Home');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}> ConfirmEmailScreen</Text>
        <CustomInput placeholder="Name" value={name} setValue={setName} />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>By registering na <Text style={styles.link} onPress={onTerm}>so tired</Text> </Text>

        <SocialSignInButtons />


        <CustomButton text="Have an account ?sign in" onPress={onSignInPress} type="TERTIARY" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
});

export default ConfirmEmailScreen;