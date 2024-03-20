import React ,{ useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//Datos

import catalogoProductos from "../../data/catalogoProductos";

const ListaDeProductosScreen = ({navigation , route}) => {


  const [botonPresionado , setBotonPresionado] = useState(false);
  const [items, setItems] = useState(0)
  const { rubroSeleccionado } = route.params;

  const incrementarItems = () => {setItems(items + 1)}

  const presionadoDeBoton = () => {
    // setBotonPresionado(true);
    
  }

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#102C57" }}>
      <FlatList
        data={catalogoProductos}
        numColumns={2}
        renderItem={({ item: producto }) =>
          producto.rubro == rubroSeleccionado && (
            <View key={producto.id}
            style={estilosProducto.container}>
              <Image style={estilosProducto.imagen} source={producto.imagen} />
              <Text style={estilosProducto.nombre}>{producto.nombre}</Text>
              <Text style={estilosProducto.precio}>$ {producto.precio}</Text>
              <Text style={estilosProducto.comercio}>{producto.comercio}</Text>
              <Text style={estilosProducto.comercio}>{producto.domicilioComercio}</Text>
              <TouchableOpacity 
              style={botonPresionado ? estilosProducto.botonPresionado : estilosProducto.boton}
              onPress={incrementarItems}
              >
                <Text style={botonPresionado ? estilosProducto.textoBotonPresionado : estilosProducto.textoBoton}>{botonPresionado ? 'Agregado a la lista' : 'Agregar a pedidos'}</Text>
              </TouchableOpacity>
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
    backgroundColor : '#F8DE22',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : 15,
    marginTop : 10,
    color : 'black'
  },
  botonPresionado : {
    width : '90%',
    height : 40,
    backgroundColor : 'transparent',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : 15,
    marginTop : 10,
    pointerEvents : 'none'
  },  
  textoBoton :{
    textTransform : 'uppercase',
    fontFamily : "Terciaria",
    
  },
  textoBotonPresionado : {
    textTransform : 'uppercase',
    fontFamily : "Terciaria",
    color : 'green'
  },  
  imagen: {
    width: 90,
    height: 90,
    
  },
});

export default ListaDeProductosScreen;
