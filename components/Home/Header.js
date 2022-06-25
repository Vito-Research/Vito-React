import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import icon from "../../assets/favicon.png"
export default function Header() {
return (
    <View style={styles.container}>
<Image style={styles.icon} source={icon} />
     
<Image style={styles.icon2} source={icon} />
    </View>
  );
}

const styles = StyleSheet.create({
   icon: {
    marginRight: "25%",
   },
   icon2: {
    marginLeft: "25%",
   },
  container: {
    flexDirection: 'row',
    flex: 1,
    flexGrow:1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
