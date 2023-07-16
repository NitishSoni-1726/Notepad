import debounce from "debounce";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

export default function Navbar(props) {
  const handleSearch = debounce((input) => {
    props.setSearchInput(input);
  }, 500);
  return (
    <View
      style={{
        height: "15%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#27374D",
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          marginTop: "10%",
          paddingLeft: "2%",
          paddingRight: "2%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Icon name="bars" type="font-awesome-5" color="white"></Icon>
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
