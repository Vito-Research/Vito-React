import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RNSamsungHealth from 'rn-samsung-health'
import { useEffect } from 'react';
import styles from './styles'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import BChart from './components/BarChart.js'

export default function App() {
 
  useEffect(()=>{
    health();
  },[])
  
  const health = async() => {
    try{
      const auth = await RNSamsungHealth.authorize();
      let startDate = new Date().setDate(new Date().getDate()-30); // 30 days back date
      let endDate = new Date().getTime(); //today's date
      let opt = {startDate, endDate};
      const steps = await RNSamsungHealth.getDailyStepCount(opt);

    }catch(error){
      console.log("error ", error)
    }
  }
  return (
    <View style={style.container}>
      <Text style={styles.red}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BChart chartData={chartData1} containerWidth={"50%"} containerHeight={"50%"} Xkey={"uv"} Ykey={"pv"} width={"50%"} height={"50%"} barColor={"##000000"}/>
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