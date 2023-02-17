import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screen/HomeScreen";
import { Dimensions, Platform } from "react-native";

const SCREENHEIGHT = Dimensions.get("window").height;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS == "web" ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ drawerPosition: "left", height: SCREENHEIGHT }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
