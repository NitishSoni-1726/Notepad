import * as React from "react";
import { TouchableHighlight } from "react-native";
import { FAB } from "react-native-elements";

export default function AddNotes({ navigation }) {
  function handleAddNotes() {
    navigation.push("AddNote");
  }
  return (
    <TouchableHighlight>
      <FAB
        onPress={() => {
          navigation.push("AddNote");
        }}
        title="+"
        color="#27374D"
        placement="right"
        size="large"
        overlayColor="#454545"
      />
    </TouchableHighlight>
  );
}
