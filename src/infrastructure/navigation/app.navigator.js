import React, { useContext, useState, useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  View,
  Text,
  Animated,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useTheme } from '@react-navigation/native';
import Feed from '../../features/Feed/screens/feed.screen';
import Doge from '../../../assets/doge.png';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const theme = useTheme();
  const [scaleAnim] = useState(new Animated.Value(1));

  const onPressTab = () => {
    // Animated.spring(scaleAnim, {
    //   toValue: 0.8,
    //   friction: 200,
    //   tension: 140,
    //   useNativeDriver: true,
    // })
  };

  function MyTabBar2({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          marginTop: 15,
          bottom: 10,
          borderRadius: 15,
          backgroundColor: theme.colors.card,
          borderTopWidth: 0,
          height: 100,

          shadowColor: theme.dark
            ? theme.colors.brand.card
            : theme.colors.constants.hotpink,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}>
        {state.routes.map((route, index) => {
          let iconName = '';
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (route.name === 'Chat') {
            iconName = isFocused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Mood') {
            iconName = isFocused ? 'happy' : 'happy-outline';
          } else if (route.name === 'Me') {
            iconName = isFocused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Fidget') {
            iconName = isFocused
              ? 'game-controller'
              : 'game-controller-outline';
          }

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {route.name == 'Chat' ? (
                <View
                  style={{
                    shadowColor: theme.colors.constants.hotpink,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: isFocused ? 1 : 0,
                    shadowRadius: 10,
                  }}>
                  <Image
                    source={isFocused ? AxolotlHead : AxolotlHeadBW}
                    style={{
                      width: isFocused ? 60 : 50,
                      height: isFocused ? 50 : 40,
                    }}
                  />
                </View>
              ) : (
                <Ionicons
                  name={iconName}
                  size={isFocused ? 32 : 28}
                  color={
                    theme.dark
                      ? theme.colors.brand.primary
                      : theme.colors.constants.hotpink
                  }
                  style={{
                    shadowColor: theme.colors.constants.hotpink,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: isFocused ? 1 : 0,
                    shadowRadius: 1,
                    elevation: 5,
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function MyTabBar({ state, descriptors, navigation }) {
    let iconName;
    return (
      <BlurView
        intensity={100}
        style={{
          flexDirection: 'row',
          margin: 20,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 15,
          bottom: 0,
          overflow: 'hidden',
          borderRadius: 0,
          borderTopWidth: 0,
          height: 100,
          backgroundColor: 'transparent',
          width: '100%',
          position: 'absolute',

          elevation: 0,
          shadowColor: theme.dark
            ? theme.colors.brand.card
            : theme.colors.constants.hotpink,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (route.name === 'Feed') {
            iconName = isFocused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Spaces') {
            iconName = isFocused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = isFocused ? 'person' : 'person-outline';
          } else if (route.name === 'Fidget') {
            iconName = isFocused
              ? 'game-controller'
              : 'game-controller-outline';
          }

          return (
            <Pressable
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              {route.name == 'Feed' ? (
                <View
                  style={{
                    shadowColor: '#988430',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: isFocused ? 1 : 0,
                    shadowRadius: 10,
                  }}>
                  <Image
                    source={Doge}
                    style={{
                      width: isFocused ? 80 : 70,
                      height: isFocused ? 80 : 70,
                    }}
                  />
                </View>
              ) : (
                <Ionicons
                  name={iconName}
                  size={isFocused ? 32 : 28}
                  color="#988430"
                  style={{
                    shadowColor: '#988430',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: isFocused ? 0.7 : 0,
                    shadowRadius: 10,
                  }}
                />
              )}
            </Pressable>
          );
        })}
      </BlurView>
    );
  }

  return (
    <>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Spaces"
          title="Spaces"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Feed"
          title="Feed"
          component={Feed}
          options={{
            headerShown: true,
            title: '',
            headerStyle: {
              borderWidth: 0,
              height: 50,
            },
            headerTransparent: true,
            headerBackground: () => (
              <BlurView
                tint="light"
                intensity={5}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          title="Profile"
          component={Feed}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};
