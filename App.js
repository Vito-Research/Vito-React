import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { authorize } from 'react-native-app-auth';
import { useEffect } from 'react';
import Home from './components/Home';
export default function App() {
 

    const config = {
      clientId: '2389P9',
      clientSecret: '',
      redirectUrl: 'https://andreasink.web.app', //note: path is required
      scopes: ['heartrate'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
        tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
        revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke'
      }
    };
    useEffect(() => {
      // Update the document title using the browser API
      try {
        const result =  authorize(config);
        console.log(result);
        // result includes accessToken, accessTokenExpirationDate and refreshToken
      } catch (error) {
        console.log(error);
      }
    },[]);
    // Log in to get an authentication token
   

   

  

  return (
    <View style={style.container}>
      <Home></Home>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
