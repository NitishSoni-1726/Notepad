import * as React from "react";
import debounce from "debounce";
import { View, TextInput } from "react-native";

export default function Navbar(props) {
  const handleSearch = debounce((input) => {
    console.log(input);
    props.setSearchInput(input);
  }, 500);
  return (
    <View
      style={{
        height: "15%",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#27374D",
        paddingTop: 30,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Type To Search..."
          placeholderTextColor="white"
          onChangeText={handleSearch}
          style={{
            borderWidth: 1,
            borderColor: "white",
            width: "80%",
            marginLeft: "5%",
            marginRight: "5%",
            padding: 4,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            color: "white",
          }}
        ></TextInput>
      </View>
    </View>
  );
}
