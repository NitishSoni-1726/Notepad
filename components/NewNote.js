import * as React from "react";
import { useState } from "react";
import { TextInput, TouchableHighlight, View } from "react-native";
import { FAB } from "react-native-elements";
export default function NewNote() {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [height, setHeight] = useState(0);
  function handleAddNewNote() {
    console.log(title);
    console.log(note);
  }
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#7F8487",
        paddingBottom: 7,
      }}
    >
      <View
        style={{ height: "100%", width: "100%", padding: 10, paddingTop: 70 }}
      >
        <TextInput
          placeholder="Title"
          onChangeText={(input) => setTitle(input)}
          placeholderTextColor="white"
          style={{ fontSize: 25, color: "white" }}
          value={title}
        ></TextInput>
        <TextInput
          multiline={true}
          onChangeText={(input) => setNote(input)}
          onContentSizeChange={(event) =>
            setHeight(event.nativeEvent.contentSize.height)
          }
          placeholder="Note"
          placeholderTextColor="white"
          autoFocus={true}
          style={{
            height: Math.max(35, height),
            fontSize: 20,
            color: "white",
          }}
          value={note}
        ></TextInput>
      </View>
      <TouchableHighlight>
        <FAB
          onPress={() => {
            handleAddNewNote();
          }}
          title="✔"
          color="#27374D"
          placement="right"
          size="large"
          overlayColor="#454545"
        />
      </TouchableHighlight>
    </View>
  );
}
