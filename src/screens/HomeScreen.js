import React , {useState , useEffect }from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList , Image} from 'react-native';
import listaImagenes from '../../data/listaImagenes';
import catalogoProductos from '../../data/catalogoProductos';
import Rubro from '../../componentes/Rubro';




const HomeScreen = () => {

    const listaDeRubros = [];

    catalogoProductos.map(producto =>
        !listaDeRubros.includes(producto.rubro) && listaDeRubros.push(producto.rubro)
    )

    const [listaRubros , setListaRubros] = useState([]);

    useEffect(
        catalogoProductos.map(producto => 
            !listaRubros.includes(producto.rubro) &&
            setListaRubros([...listaRubros,producto.rubro])
        )
    ,catalogoProductos);


    return (
    
        <View style={{flex : 1}}>
            <View>
            <FlatList
            data={listaDeRubros}
            renderItem={({ item }) => (
                listaImagenes.map(imagen =>
                    item === imagen.nombre &&
                    <Rubro 
                    nombreRubro = {item}
                    imagenRubro = {imagen.url}/>
                )
            )}>
        </FlatList>
        </View>
        </View>
    )
}

export default HomeScreen