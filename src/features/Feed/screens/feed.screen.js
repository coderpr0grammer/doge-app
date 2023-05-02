import React, { useState } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// const usersCollection = firestore().collection('posts');

const Feed = (props) => {
  const Item = ({ title }) => (
    <>
      <View
        style={{
          width: '100%',
          height: 100,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'orange',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ marginBottom: 5 }}>{title}</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'orange',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ marginBottom: 5 }}>{title}</Text>
      </View>
    </>
  );

  const [refreshing, setRefreshing] = useState(false);

  return (
    <LinearGradient
      colors={['orange', '#988430']}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{
        flex: 1,
        width: '100%',
      }}>
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
          renderItem={({ item }) => <Item title={'hello'} />}
          contentContainerStyle={{
            padding: 10,
            paddingBottom: 80,
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Feed;
