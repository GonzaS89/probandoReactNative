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
      style={{ width: 80, height: 80}}
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
          headerTitle : (props) => <LogoApp {...props} />,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: "Terciaria", color: "#EEEDEB" },
          headerStyle: { backgroundColor: "#FF204E"},
          // headerShown: false
        }}
      />
      <Stack.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
        options={({ route }) => ({
          title: `Productos de ${route.params.titulo}`,
          headerTitleAlign: 'center', 
          headerStyle : {backgroundColor : '#FF204E'},
          headerTitleStyle: { fontFamily: 'Terciaria', textTransform: 'uppercase' ,color : 'white'},
          headerBackVisible : false
        })}
        />
    </Stack.Navigator>
  );
}

function MyTabs() { 

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarBadgeStyle: { backgroundColor: 'white', width: 25, fontFamily: 'Terciaria' },
        tabBarIcon: () => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = "home";
          } else {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={30} color={'white'} />;
        },
        tabBarStyle: { backgroundColor: '#FF204E' }
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          headerShown : false,
          tabBarBadge : 0
          // headerRight : (props) => <LogoCarrito {...props} />,
        }} />
      <Tab.Screen
        name="CarritoScreen"
        component={CarritoScreen}
        options={{ 
          headerTitle : 'Carrito',
          headerTitleAlign : 'center',
          headerTitleStyle : {
            fontFamily : 'Terciaria',
            color : 'white'
          },
          headerStyle : {
            backgroundColor : '#FF204E'
          }

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
