import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
return (
    <View style={props.text == "OK" ? styles.good : styles.bad}>
      <Text 
      style={styles.text}>{props.text}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
    bad: {
    flex: 1,
    paddingHorizontal:"50%",
    backgroundColor: '#E74B3B',
    maxHeight: "20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  good: {
    flex: 1,
    maxHeight: "20%",
    paddingHorizontal:"35%",
    backgroundColor: '#2DCC70',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  }
});
