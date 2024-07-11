import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

//screens

import HomeScreen from "./src/screens/HomeScreen";
import ListaDeProductosScreen from "./src/screens/ListaDeProductosScreen";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function LogoApp() {
  return (
    <Image
      style={{ width: 60, height: 60}}
      source={require('./src/iconos/logo-lokerilotene.png')}
    />
  );
}

function LogoCarrito() {
  return (
    <Image
      style={{ width: 35, height: 35, marginRight: 20 }}
      source={require('./src/iconos/carrito.png')}
    />
  );
}

function MyStack() {
 
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown : false,
          headerTitle : '',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: "#F0F3FF" , fontWeight : 'bold'},
          headerStyle: { backgroundColor: "#C73659", }
          // headerShown: false
        }}
      />
      <Stack.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
        options={({ route }) => ({
          title: route.params.titulo,
          headerTitleAlign: 'center', 
          headerStyle : {backgroundColor : '#C73659'},
          headerTitleStyle: { color : '#F0F3FF' , fontWeight : 'bold'},
          headerBackVisible : false
        })}
        />
    </Stack.Navigator>
  );
}

function MyTabs() { 

  return (
    <Tab.Navigator
      initialRouteName="Carrito"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarBadgeStyle: { backgroundColor: 'white', width: 25},
        tabBarIcon: () => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = "home";
          } else {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={30} color={'white'} />;
        },
        tabBarStyle: { backgroundColor: '#C73659'  , height : 50}
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          headerShown : false
          // headerRight : (props) => <LogoCarrito {...props} />,
        }} />
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
