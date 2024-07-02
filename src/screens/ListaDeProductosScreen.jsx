import React ,{ useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";


//Datos

import catalogoProductos from "../../data/catalogoProductos";

const ListaDeProductosScreen = ({route}) => {

  const { rubroSeleccionado } = route.params;
  const { imagenRubroSeleccionado } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFF80" }}>
      <FlatList
        data={catalogoProductos}
        renderItem={({ item: producto }) =>
          producto.rubro === rubroSeleccionado && 
            <View key={producto.id}
            style={estilosProducto.container}>
              <View style = {estilosProducto.contImagen}>
              <Image 
              style={estilosProducto.imagen} 
              source={{uri : imagenRubroSeleccionado}}/>
              </View>
              <View style = {estilosProducto.detalle}>
              <Text style={estilosProducto.nombre}>{producto.nombre}</Text>
              <Text style={estilosProducto.precio}>$ {producto.precio}</Text>
              <Text style={estilosProducto.comercio}>{producto.comercio}</Text>
              <Text style={estilosProducto.comercio}>{producto.domicilioComercio}</Text>
              </View>
            </View>
          
        }
      ></FlatList>
    </View>
  );
};

const estilosProducto = StyleSheet.create({
  container: {
    width: 400,
    flexDirection : 'row',
    backgroundColor: "white",
    // marginHorizontal: 10,
    marginVertical : 2,
    borderRadius: 15,
    alignItems: "center",
    // justifyContent : 'space-between',
    padding: 10,
    borderWidth : .5,
    borderStyle : "solid",
    borderColor: '#141E46',
    minHeight : 150
    
    // marginTop: 30,
  },
  detalle :{
    marginLeft : 25,
  },
  nombre: {
    // fontFamily: "Quinta",
    
    fontSize: 17.5,
    // textAlign: "center",
    color: "#12372A",
    marginVertical: 5,
  },
  precio: {
    // fontFamily: "Quinta",
    fontSize: 18,
    color: "#12372A",
    marginVertical : 5,
    fontWeight : 'bold',
  },
  comercio : {
    // fontFamily: "Quinta",
    fontSize : 12.5,
    // // textAlign: 'center',
    // textTransform: "uppercase",
    marginVertical: 1.5,
    color : '#A79277'
  },
  boton : {
    width : '90%',
    height : 40,
    backgroundColor : '#4793AF',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : 15,
    marginVertical : 5,
    color : 'red',
  },
  contImagen : {
    backgroundColor : '#EEEDEB',
    width : 110,
    height : 110
  },  
  imagen: {
    width: '100%',
    height: '100%',
    borderRadius : 20
    
  },
});

export default ListaDeProductosScreen;
