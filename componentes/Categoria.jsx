import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Rubro from './Rubro';


import catalogoProductos from '../data/catalogoProductos';
import listaImagenes from '../data/listaImagenes';

const Categoria = ({ nombreCategoria }) => {

    const listaDeRubros = [];

    catalogoProductos.map(producto =>
        nombreCategoria === producto.categoria &&
        !listaDeRubros.includes(producto.rubro) &&
        listaDeRubros.push(producto.rubro)
    );


    return (

        <View style={estiloCategoria.container}>
            <Text
                style={estiloCategoria.texto}>
                {nombreCategoria}</Text>
            <FlatList
                data={listaDeRubros}
                numColumns={2}
                renderItem={({ item }) => (
                    listaImagenes.map(imagen => item === imagen.nombre &&
                        <Rubro
                            nombreRubro={item}
                            imagenRubro={imagen.url} />
                    )
                )}>
            </FlatList>
        </View>
    )
}

const estiloCategoria = StyleSheet.create({
    container: {
        backgroundColor: '#F5F7F8',
        paddingHorizontal: 10,
        marginHorizontal: 5,
        paddingVertical: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    texto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 15,
        paddingVertical: 5,
        borderRadius: 5,
        textShadowColor: '#F1E5D1',
        textShadowOffset: { width: 1, height: 15 },
        textShadowRadius: 50
    }
})

export default Categoria;
