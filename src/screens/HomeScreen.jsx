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
        
        <View style={{ flex: 1, backgroundColor: '#FFFF80' }}>
            <View style = {{backgroundColor : 'white' , paddingVertical : 15 , paddingHorizontal : 5}}> 
                <Text style = {{fontFamily : 'Quinta', fontSize : 20 , fontWeight : 800 , marginBottom : 20, marginLeft : 5}}>
                    Productos por categoria</Text>
                <FlatList
                    data={listaDeRubros}
                    numColumns={3}
                    renderItem={({ item }) => (
                        listaImagenes.map(imagen =>
                            item === imagen.nombre &&
                            <Rubro
                                nombreRubro={item}/>
                        )
                    )}>
                </FlatList>
            </View>
        </View>
    )
}

export default HomeScreen