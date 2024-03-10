import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

//screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingScreen from "./src/screens/SettingScreen";
import StackScreen from "./src/screens/StackScreen";
import ListaDeProductosScreen from "./src/screens/ListaDeProductosScreen";
import { Button } from "react-native";
import CarritoScreen from "./src/screens/CarritoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LogoApp() {
  return (
    <Image
      style={{ width: 75, height: 75  , marginVertical : 10 }}
      source={require('./src/iconos/logo-lokerilotene.png')}
    />
  );
}

function LogoCarrito () {
  return (
    <Image
      style={{ width: 35, height: 35 , marginRight : 20 }}
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
          headerTitleAlign : 'center',
          headerTitleStyle: { fontFamily: "Terciaria", color: "#EEEDEB" },
          headerStyle: { backgroundColor: "#FF8911"},     
          headerShown : false
        }}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen
        name="ListaDeProductos"
        component={ListaDeProductosScreen}
        options={{ 
          headerTitle: "Productos relacionados" ,
          presentation : "card",
          headerTitleAlign : 'center',
          headerTitleStyle : { fontFamily: "Terciaria", textTransform: 'uppercase' , fontSize : 15}
      }}
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
        tabBarBadge : 0,   
        tabBarBadgeStyle: {backgroundColor: 'white' , width: 25 , fontFamily : 'Terciaria'},
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = "home";
          } else {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={30} color={'black'} />;
        },
        tabBarStyle  : {backgroundColor : '#FF8911'}
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          headerStyle : {backgroundColor : '#FF8911', height : 100},
          headerTitle : (props) => <LogoApp {...props} />,
          headerTitleAlign : 'center',
          headerTintColor : 'white',
          headerTitleStyle : {fontFamily : 'Terciaria'},
          // headerRight : (props) => <LogoCarrito {...props} />,
          }}/>
      <Tab.Screen
        name="CarritoScreen"
        component={CarritoScreen} />
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
