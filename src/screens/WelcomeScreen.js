import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/welcome1.png")}
            style={{ marginTop: 80, width: 200, height: 200 }}
          />

          <Text
            style={{
              color: "#f96163",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 40,
            }}
          >
            40K+ Premium Recipes
          </Text>

          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "#3c444c",
              marginTop: 10,
              marginBottom: 40,
            }}
          >
            Cook Like A Chef
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("RecipeList")}
            style={{
              backgroundColor: "#f96163",
              borderRadius: 18,
              paddingVertical: 18,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
              Let's Go
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
