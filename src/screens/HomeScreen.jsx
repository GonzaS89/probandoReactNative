import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import catalogoProductos from '../../data/catalogoProductos';
import Categoria from '../../componentes/Categoria';




const HomeScreen = () => {

    const listaDeCategorias = [];

    catalogoProductos.map(producto =>
        !listaDeCategorias.includes(producto.categoria) && listaDeCategorias.push(producto.categoria)
    )

    return (
        
        <View style={{ flex: 1, backgroundColor: '#FBF6E2' }}>
            <FlatList 
                data = {listaDeCategorias}
                renderItem={({ item }) => <Categoria nombreCategoria = {item}/>
                }
            >
            </FlatList>
            {/* <View style = {{
                backgroundColor : 'white' , 
                paddingVertical : 15 , 
                paddingHorizontal : 5
                }}> 
                <Text style = {{
                    fontSize : 17.5 , 
                    fontWeight : 800 , 
                    marginBottom : 20, 
                    marginLeft : 5,
                    textAlign : 'center',
                    textTransform : 'uppercase',
                     // textShadowColor: 'black',
                    textDecorationStyle: 'solid',
                    // textShadowOffset: { width: 2, height: 2 },
                    textShadowRadius: 5,}}>
                    Comestibles</Text>
                <FlatList
                    data={listaDeRubros}
                    numColumns={3}
                    renderItem={({ item }) => (
                        listaImagenes.map(imagen =>
                            item === imagen.nombre &&
                            <Rubro
                                nombreRubro={item}
                                imagenRubro={imagen.url}/>
                        )
                    )}>
                </FlatList>
            </View> */}
        </View>
    )
}

export default HomeScreen