import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import icon from "../../assets/favicon.png"
export default function Explanation(props) {
  return (
    <View style={styles.hstack}>
      <Image style={styles.img} source={icon} />
      <View style={styles.vstack}>
      <Text
        style={styles.title}>{props.title}</Text>

<Text
        style={styles.text}>{props.text}</Text>

</View>
    

    </View>
  );
}

const styles = StyleSheet.create({

  img: {
    height: 50,
    width: 50,
    objectFit: "contain"
    
  },
  text: {

    alignItems: 'left',
    justifyContent: 'left',
    paddingLeft: 20,
    marginVertical: 10,
  },
  title: {

    alignItems: 'left',
    justifyContent: 'left',
    paddingLeft: 20,
    marginVertical: 5,
  },
  hstack: {
    marginHorizontal: "10%",
    flexDirection: 'row',
    marginVertical: "5%",

    color: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
  vstack: {
    marginHorizontal: "10%",
    flexDirection: 'column',
    

    color: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
})
