import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

//screens

import HomeScreen from "./src/screens/HomeScreen";
import ListaDeProductosScreen from "./src/screens/ListaDeProductosScreen";
import CarritoScreen from "./src/screens/CarritoScreen";


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

  const [items , setItems] = useState(0);

  const actualizarItemsCarrito = (item) => {
    setItems(item)
  }

 
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown : false,
          headerTitle : 'Productos por categorías',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: "#F0F3FF" },
          headerStyle: { backgroundColor: "#0F67B1"},
          // headerShown: false
        }}
      />
      <Stack.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
        options={({ route }) => ({
          title: `Productos ${route.params.titulo}`,
          headerTitleAlign: 'center', 
          headerStyle : {backgroundColor : '#0F67B1'},
          headerTitleStyle: { textTransform: 'uppercase' ,color : '#F0F3FF'},
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
        tabBarStyle: { backgroundColor: '#0F67B1'  , height : 60}
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
