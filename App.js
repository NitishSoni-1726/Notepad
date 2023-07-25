import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import NoteList from "./components/NotesList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewNote from "./components/NewNote";
const Stack = createNativeStackNavigator();

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View
          style={{
            height: "100%",
            paddingTop: 0,
            width: "100%",
            marginTop: "1%",
          }}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Notes">
              {(props) => (
                <NewNote
                  {...props}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7F8487",
    height: "100%",
    width: "100%",
  },
});
