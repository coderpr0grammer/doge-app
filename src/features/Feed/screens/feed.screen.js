import React, { useState } from "react";
import { View, FlatList, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SvgUri from "react-native-svg-uri";
import Character from "../../../../assets/character.png";
import Ionicons from "react-native-vector-icons/Ionicons";

// const usersCollection = firestore().collection('posts');

const Feed = (props) => {
  const Item = ({ title }) => (
    <>
      <View
        style={{
          width: "100%",
          height: 180,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderColor: "orange",
          flex: 1,
          padding: 10,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={Character} style={{ width: 50, height: 50 }} />
          <Text style={{ marginBottom: 5 }}>{title}</Text>
        </View>
      </View>
    </>
  );

  const [refreshing, setRefreshing] = useState(false);

  return (
    <LinearGradient
      colors={["orange", "#988430"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <SafeAreaView>
        <FlatList
          onRefresh={() => {
            setRefreshing(true);

            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <Item title={"hello"} />}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            shadowColor: "#bf7e06",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 1,
            width: 60,
            height: 60,
            borderRadius: 70,
            position: "static",
            bottom: 150,
            left: "80%",
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Ionicons name="add-outline" size={32} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Feed;
