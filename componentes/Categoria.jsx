import React from 'react';
import { Text ,  StyleSheet , View , FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Rubro from './Rubro';


import catalogoProductos from '../data/catalogoProductos';
import listaImagenes from '../data/listaImagenes';

const Categoria = ({nombreCategoria}) => {

    const listaDeRubros = [];

    catalogoProductos.map(producto =>
       nombreCategoria === producto.categoria && 
       !listaDeRubros.includes(producto.rubro) && 
       listaDeRubros.push(producto.rubro)
    );


    return (

        <View style = {{backgroundColor : 'white' , width : '100%' ,paddingHorizontal : 10 , paddingVertical : 15 , marginBottom : 3 , borderRadius : 20}}>

            <Text style = {{textTransform : 'uppercase' , fontWeight : 'bold' , textAlign : 'center' , fontSize : 18 , marginBottom : 20 , letterSpacing : 2 }}>{nombreCategoria}</Text>

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
        </View>

    )

    
}
export default Categoria;
