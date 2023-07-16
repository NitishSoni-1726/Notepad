import { ActivityIndicator, Text, View } from "react-native";
import Notes from "./Notes";
import { notes } from "./NotesData";
import { useEffect, useState } from "react";
export default function NoteList(props) {
  const [data, setData] = useState({
    loading: "not_fetched",
    data: null,
    error: null,
  });
  useEffect(() => {
    setData({ loading: "fetching", ...data });
    setTimeout(() => {
      setData({ ...data, loading: "fetched", data: notes });
    }, 1000);
  }, [null]);

  let filteredNotes = [];
  if (data.data) {
    filteredNotes = data.data;
  }
  if (props.searchInput) {
    filteredNotes = [];
    for (let i = 0; i < notes.length; i++) {
      if (
        notes[i].title.toLowerCase().includes(props.searchInput.toLowerCase())
      ) {
        filteredNotes.push(notes[i]);
      }
    }
  }
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#7F8487",
      }}
    >
      {data.loading === "not_fetched" ? (
        <View
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 50,
            backgroundColor: "#7F9090",
            width: "100%",
            height: "100%",
          }}
        >
          <ActivityIndicator size="large" color="white" />
          <Text style={{ color: "white", marginTop: 10, fontSize: 15 }}>
            Loading Notes...
          </Text>
        </View>
      ) : (
        filteredNotes.map((item, index) => {
          return (
            <Notes
              key={index}
              note={item.note}
              title={item.title}
              date={item.date}
            />
          );
        })
      )}
    </View>
  );
}
