import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

//screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";
import StackScreen from "./src/screens/StackScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogoHeader() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./src/iconos/logo-lokerilotene.png')}
      />
    );
  }

function MyStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
        headerStyle : {backgroundColor : '#FFB534'},
        headerTitleAlign : 'center',
    }}    
        
        >
      <Stack.Screen
      name="Home" 
      component={HomeScreen}/>
      <Stack.Screen
      name="SettingScreen" 
      component={SettingScreen} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = "home";
          } else {
            iconName = "settings";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen 
      name="HomeScreen" 
      component={MyStack} options={{headerShown : false}}/>
      <Tab.Screen 
      name="SettingsScreen" 
      component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
