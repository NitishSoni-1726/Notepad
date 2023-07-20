import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Notes(props) {
  return (
    <View
      style={{
        width: "95%",
        padding: 25,
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#7F9090",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
      >
        <Icon name="circle" type="font-awesome" color="white" size={10}></Icon>
        <View style={{ paddingLeft: 10, width: "100%" }}>
          <View style={{ width: "100%" }}>
            <Text style={{ color: "white", fontWeight: 800, fontSize: 20 }}>
              {props.title}
            </Text>
            <Text style={{ color: "white", fontWeight: 600 }}>
              Date: ({props.date})
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 15, maxHeight: 55 }}>
            {props.note}
          </Text>
        </View>
      </View>
    </View>
  );
}
