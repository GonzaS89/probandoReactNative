import React from 'react';
import {Text , View, Image, StyleSheet} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import listaComercios from '../data/listaComercios';

const Producto = ({idProducto,nombreProducto, precioProducto,comercioProducto,imagenRubroSeleccionado}) => {

  let claseEnvios;
  let direccionComercio;

  listaComercios.map(comercio => {
     if(comercio.nombre === comercioProducto){direccionComercio = comercio.domicilioComercio;
    if(comercio.envios) {claseEnvios = estilosProducto.contEnviosVisible}
  else{claseEnvios = estilosProducto.contEnviosOculto};}
  })
  
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
              <Text style={estilosProducto.domicilioComercio}>Ubicada en {direccionComercio}</Text>
              <View style = {claseEnvios}>
                <Text style = {{color : 'green' , fontSize : 9}}>Envíos a domicilio</Text>
              <MaterialIcons name="delivery-dining" size={18} color="green" marginLeft ={5}/>
              </View>
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
      borderWidth : .5,
      borderStyle : "solid",
      borderColor: '#141E46',
      height : 130,
      overflow : 'hidden'
    },
    detalle :{
      justifyContent : 'center',
      marginLeft : 25,
    },
    nombre: {
      fontSize: 13,
      textTransform : 'uppercase',
      color: "#12372A",
      marginVertical: 5,
      letterSpacing : -.5,
      maxWidth: '100%'
    },
    precio: {
      // fontFamily: "Quinta",
      fontSize: 18,
      color: "#12372A",
      marginVertical : 5,
      fontWeight : 'bold',
    },
    comercio : {
      fontSize : 10,
      marginVertical: 1.5,
      color : '#A79277',
      textTransform : 'uppercase',
      letterSpacing : -.5

    },
    domicilioComercio :{
      fontSize : 9,
      marginVertical: 1.5,
      color : '#A79277'
    },
    contImagen : {
      justifyContent : 'center',
      // backgroundColor : '#EEEDEB',
      width : 100,
      height : '100%'
    },  
    imagen: {
      width: '100%',
      height: '100%',
      objectFit : 'fill'
    },
    contEnviosVisible : {
      flexDirection : 'row', 
      alignItems : 'center'
    },
    contEnviosOculto :{
      display : 'none'
    }
  });

export default Producto;