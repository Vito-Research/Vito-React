import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { authorize } from 'react-native-app-auth';
import { useEffect } from 'react';

import styles from './styles'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import BChart from './components/BarChart.js'
import Home from './components/Home.js'
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
      {/* <BChart chartData={chartData1} containerWidth={"50%"} containerHeight={"50%"} key1={"uv"}  width={"50%"} height={"50%"}/> */}
    </View>
  );
}
const chartData1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});