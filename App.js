import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { authorize } from 'react-native-app-auth';
import { useEffect } from 'react';
import Home from './components/Home';
export default function App() {
 

    const config = {
      clientId: '2389P9',
      clientSecret: '65c7752a154b60303303400040f55837',
      redirectUrl: 'https://vitovitals.org', //note: path is required
      scopes: ['heartrate'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
        tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
        revocationEndpoint: 'https://api.fitbit.com/oauth2/revoke'
      }
    };
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   try {
    //     const result =  authorize(config).then(() => {
    //     console.log(result);
    //     const json = fetch('https://api.fitbit.com/1/user/-/activities/heart/date/2021-01-01/2022-07-01.json', { 
    //       method: 'get', 
    //       headers: new Headers({
    //           'Authorization': 'Bearer ' + result.result
    //       })
    //   }).json;
    //     console.log(JSON.stringify(json));
    //     console.log(result);
    // })
    //     // result includes accessToken, accessTokenExpirationDate and refreshToken
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },[]);
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
