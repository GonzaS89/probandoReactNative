import React from 'react';
import { View, FlatList } from 'react-native';
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
                data={listaDeCategorias}
                renderItem={({ item }) => <Categoria nombreCategoria={item} />
                }
            >
            </FlatList>
        </View>
    )
}

export default HomeScreen