import { StyleSheet, View, Image, Text } from "react-native";
import spotifyImage from "./assets/icons8-spotify-100.png";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>welcome to spotify</Text>
      {/* Image */}
      <Image source={spotifyImage} style={styles.image} />
      {/* Detail COntainer */}
      <View style={styles.detailsContainer}>
        <Text style={styles.textDetail}>
          account name <Text style={{ color: "white" }}> : </Text>
        </Text>
        <Text style={styles.textResponse}>orison tetteh</Text>
      </View>
      {/* Detail COntainer */}
      <View style={styles.detailsContainer}>
        <Text style={styles.textDetail}>
          your platform<Text style={{ color: "white" }}> : </Text>
        </Text>
        <Text style={styles.textResponse}>family package</Text>
      </View>
      {/* Detail COntainer */}
      <View style={styles.detailsContainer}>
        <Text style={styles.textDetail}>
          your email<Text style={{ color: "white" }}> : </Text>
        </Text>
        <Text style={styles.textResponse}>orisontetteh@gmail.com</Text>
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spotifyImage: {
    marginBottom: 75,
  },
  detailsContainer: {
    flexDirection: "row",
    paddingTop: 40,
  },
  textDetail: {
    color: "#1CD463",
    fontSize: 17,
    textTransform: "capitalize",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  textResponse: {
    color: "white",
    fontSize: 17,
    letterSpacing: 1
  },
  title: {
    color: "#1CD463",
    fontSize: 25,
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingBottom: 40,
    fontWeight: "bold",
  },
});

export default App;
