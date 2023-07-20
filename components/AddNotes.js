import { TouchableHighlight } from "react-native";
import { FAB } from "react-native-elements";

export default function AddNotes() {
  function handleAddNotes() {}
  return (
    <TouchableHighlight>
      <FAB
        onPress={handleAddNotes}
        title="+"
        color="#27374D"
        placement="right"
        size="large"
        overlayColor="#454545"
      />
    </TouchableHighlight>
  );
}
