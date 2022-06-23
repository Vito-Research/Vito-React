import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import icon from "../../assets/favicon.png"
export default function Explanation(props) {
return (
    <View style={styles.container}>
<Image  source={icon} />
      <Text 
      style={styles.text}>{props.text}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%"
  },
  container: {
    paddingHorizontal:"10%",
    flexDirection: 'row',
    flex: 1,

    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
