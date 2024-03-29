import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import listaImagenes from '../../data/listaImagenes';
import catalogoProductos from '../../data/catalogoProductos';
import Rubro from '../../componentes/Rubro';




const HomeScreen = () => {

    const listaDeRubros = [];

    catalogoProductos.map(producto =>
        !listaDeRubros.includes(producto.rubro) && listaDeRubros.push(producto.rubro)
    )

    return (

        <View style={{ flex: 1, backgroundColor: '#3C3633' }}>
            <View>
                <FlatList
                    data={listaDeRubros}
                    renderItem={({ item }) => (
                        listaImagenes.map(imagen =>
                            item === imagen.nombre &&
                            <Rubro
                                nombreRubro={item}
                                imagenRubro={imagen.url} />
                        )
                    )}>
                </FlatList>
            </View>
        </View>
    )
}

export default HomeScreen