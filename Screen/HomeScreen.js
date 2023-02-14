import { StyleSheet, Text, View, StatusBar } from "react-native";
import NavBar from "../Components/UI/NavBar";

export default function HomeScreen({ navigation }) {



  return (
    <View style={styles.container}>
      <StatusBar />
      <NavBar navigation={navigation} />
      <Text style={{flex: 11, textAlignVertical: "center"}}>Welcome to FUN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
