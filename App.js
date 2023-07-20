import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import { useState } from "react";
import NoteList from "./components/NotesList";
import AddNotes from "./components/AddNotes";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.container}>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <View
        style={{
          height: "84%",
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingTop: 0,
          width: "100%",
          marginTop: "1%",
        }}
      >
        <ScrollView>
          <NoteList searchInput={searchInput} />
        </ScrollView>
        <AddNotes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7F8487",
    height: "100%",
    width: "100%",
  },
});
