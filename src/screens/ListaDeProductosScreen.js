import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";

//Datos

import catalogoProductos from "../../data/catalogoProductos";

const ListaDeProductosScreen = () => {
  const route = useRoute();
  const { rubroSeleccionado } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#1F2544" }}>
      <FlatList
        data={catalogoProductos}
        numColumns={2}
        renderItem={({ item: producto }) =>
          producto.rubro == rubroSeleccionado && (
            <View style={estilosProducto.container}>
              <Image style={estilosProducto.imagen} source={producto.imagen} />
              <Text style={estilosProducto.nombre}>{producto.nombre}</Text>
              <Text style={estilosProducto.precio}>$ {producto.precio}</Text>
              <Text style={estilosProducto.comercio}>{producto.comercio}</Text>
              <Text style={estilosProducto.comercio}>{producto.domicilioComercio}</Text>
              <Pressable style={estilosProducto.boton}>
                <Text style={estilosProducto.textoBoton}>Añadir a pedidos</Text>
              </Pressable>
            </View>
          )
        }
      ></FlatList>
    </View>
  );
};

const estilosProducto = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: "#EEEDEB",
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  nombre: {
    fontFamily: "Terciaria",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    color: "#12372A",
    marginVertical: 5,
  },
  precio: {
    fontFamily: "Terciaria",
    fontSize: 25,
    color: "#12372A",
    marginVertical : 5
  },
  comercio : {
    fontFamily: "Terciaria",
    fontSize : 12,
    textAlign: 'center',
    marginVertical: 1.5,
  },
  boton : {
    width : '90%',
    height : 40,
    backgroundColor : '#FFB534',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : 15,
    marginTop : 10
  },  
  textoBoton :{
    textTransform : 'uppercase',
    fontFamily : "Terciaria"
  },  
  imagen: {
    width: 90,
    height: 90,
    
  },
});

export default ListaDeProductosScreen;
