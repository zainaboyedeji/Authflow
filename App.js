import React, {  useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';
import Amplify from '@aws-amplify/core';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});




export default App;
