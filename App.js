import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RNSamsungHealth from 'rn-samsung-health'

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
