import { StyleSheet, Text, View } from 'react-native';
import Card from './Home/Card';
import Explanation from './Home/Explaination';
import Header from './Home/Header';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
return (
    <View style={styles.container}>
        <Header></Header>
        <Text style={styles.header}>Heart Rate Score</Text>
      <Card text="OK"></Card>
      <View style={styles.closeStack}>
      <Explanation icon = "A" text="Hello world, 1234556788"></Explanation>
      <Explanation icon = "A" text="Hello world, 1234556788"></Explanation>
      <Explanation icon = "A" text="Hello world, 1234556788"></Explanation>
      </View>
      <StatusBar style="auto" />
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
   height: '40%'
  },
  text: {
    alignItems: "left",
    alignText: "left",
  },
  header: {
   fontSize: 22,
  }
});
