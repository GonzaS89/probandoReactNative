import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

//screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";
import StackScreen from "./src/screens/StackScreen";
import ListaDeProductosScreen from "./src/screens/ListaDeProductosScreen";
import CarritoScreen from "./src/screens/CarritoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function LogoApp() {
  return (
    <Image
      style={{ width: 75, height: 75, marginVertical: 10 }}
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
          headerTitle: "Selecciona un rubro",
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: "Terciaria", color: "#EEEDEB" },
          headerStyle: { backgroundColor: "#FF8911" },
          headerShown: false
        }}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
        options={({ route }) => ({
          title: `Productos de ${route.params.titulo}`,
          headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'Terciaria', textTransform: 'uppercase' }
        })}
      //     headerTitle: "Productos relacionados" ,
      //     headerTitleAlign : 'center',
      //     headerTitleStyle : { fontFamily: "Terciaria", textTransform: 'uppercase' , fontSize : 15}
      // }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {

  const [contadorItems, setContadorItems] = useState(0);
  const actualizarItems = (items) => {
    setContadorItems(contadorItems + items)
  }

  useEffect(()=> {
    console.log(contadorItems)
  },[contadorItems])

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
          return <Ionicons name={iconName} size={30} color={'black'} />;
        },
        tabBarStyle: { backgroundColor: '#FF8911' }
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          headerStyle: { backgroundColor: '#FF8911', height: 100 },
          headerTitle: (props) => <LogoApp {...props} />,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'Terciaria' }
          // headerRight : (props) => <LogoCarrito {...props} />,
        }} />
        <Tab.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
       initialParams={{ actualizarItems }} />
      <Tab.Screen
        name="CarritoScreen"
        component={CarritoScreen}
        options={{ tabBarBadge: contadorItems  > 0 ? contadorItems : null }} />
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
