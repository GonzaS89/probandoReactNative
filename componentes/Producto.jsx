import React from 'react';
import {Text , View, Image, StyleSheet} from 'react-native';

const Producto = ({idProducto,nombreProducto, precioProducto,comercioProducto,domicilioComercio, imagenRubroSeleccionado}) => {

    return (

        <View key={idProducto}
            style={estilosProducto.container}>
              <View style = {estilosProducto.contImagen}>
              <Image 
              style={estilosProducto.imagen} 
              source={{uri : imagenRubroSeleccionado}}/>
              </View>
              <View style = {estilosProducto.detalle}>
              <Text style={estilosProducto.nombre}>{nombreProducto}</Text>
              <Text style={estilosProducto.precio}>$ {precioProducto}</Text>
              <Text style={estilosProducto.comercio}>{comercioProducto}</Text>
              <Text style={estilosProducto.comercio}>{domicilioComercio}</Text>
              </View>
            </View>

)
}

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
    },
    detalle :{
      marginLeft : 25,
    },
    nombre: {
      fontSize: 17.5,
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
      fontSize : 12.5,
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

export default Producto;