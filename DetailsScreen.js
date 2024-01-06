import React from "react";
import { Button, Text, View } from "react-native";

const DetailsScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
         title="Go to HomeScreen"
         onPress={() => navigation.navigate("Home")}
         />
    </View>
);

export default DetailsScreen;