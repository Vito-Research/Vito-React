import { StyleSheet, Text, View } from 'react-native';

import Card from './Home/Card';
import Explanation from './Home/Explaination';
import Header from './Home/Header';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

  const okExplain = [{icon: "A", title: "Not Medical Advice/Diagnosis/Treatment", text: "Always consult your doctor, this is only a data point to discuss"}, {icon: "A", title: "Heart Rate Near Average", text: "Vito measures your heart rate while asleep to unlock insights into health"}];

//import BarChart from '.components/BarChart.js'

return (
    <View style={styles.container}>
        <Header></Header>
        <Text style={styles.header}>Heart Rate Score</Text>
      <Card text="OK"></Card>
      <View style={styles.closeStack}>
      
      {Object.keys(okExplain).map((ok, i) => ( <Explanation icon={okExplain[i].icon} title={okExplain[i].title} text={okExplain[i].text}></Explanation>))}
      </View>
      <StatusBar style="auto" />
      {/* <BarChart data={{data}}></BarChart> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeStack: {
   height: '60%'
  },
  text: {
    alignItems: "left",
    alignText: "left",
  },
  header: {
   fontSize: 22,
  }
});
