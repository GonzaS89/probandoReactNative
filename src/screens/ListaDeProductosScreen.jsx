import React, { useState } from "react";
import {
  View,
  FlatList,
} from "react-native";


//Datos

import catalogoProductos from "../../data/catalogoProductos";
import Producto from "../../componentes/Producto";

const ListaDeProductosScreen = ({ route }) => {

  const { rubroSeleccionado } = route.params;
  const { imagenRubroSeleccionado } = route.params;

  let listaDeProductosSeleccionados = [];

  catalogoProductos.map(producto => {
    producto.rubro === rubroSeleccionado && listaDeProductosSeleccionados.push(producto)
  })

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFF455" }}>
      <FlatList
        data={listaDeProductosSeleccionados}
        renderItem={({ item: producto }) =>
          <Producto
            idProducto={producto.id}
            nombreProducto={producto.nombre}
            precioProducto={producto.precio}
            comercioProducto={producto.comercio}
            domicilioComercio={producto.domicilioComercio}
            imagenRubroSeleccionado={imagenRubroSeleccionado}
            enviosProducto={producto.envios} />
        }>
      </FlatList>
    </View>
  );
};

export default ListaDeProductosScreen;
