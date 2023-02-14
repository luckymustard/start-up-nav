import { StyleSheet, Text, View, Dimensions } from "react-native";
import { IconButton, useStyles } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SCREENWIDTH = Dimensions.get("window").width;
const SCREENHEIGHT = Dimensions.get("window").height / 12;

export default function NavBar({ navigation }) {

    const toggleL = () => {
        navigation.toggleDrawer();
      };
  

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <IconButton
          icon={(props) => <Icon name="menu" {...props} onPress={toggleL} />}
        />
      </View>
      <View style={styles.rightContainer}><Text>Label Here</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: SCREENHEIGHT,
    width: SCREENWIDTH
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 10
  },
  rightContainer: {
    flex: 11,
    alignItems: "center",
    textAlignVertical: "center",
    marginRight: 15,
  },
});
