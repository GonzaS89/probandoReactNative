import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import listaImagenes from "../data/listaImagenes";



const Rubro = ( {nombreRubro , imagenRubro} ) => {

    const Navigation = useNavigation();

    return (

        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => Navigation.navigate('ListaDeProductos', {rubroSeleccionado : nombreRubro , titulo : nombreRubro , imagenRubroSeleccionado : imagenRubro})}
            style={estilosRubro.container}>
            <Text style={estilosRubro.tituloItem}>{nombreRubro}</Text>
            <Image
                style={estilosRubro.imagen}
                source={{uri : imagenRubro}}/>
        </TouchableOpacity>
    )
}

const estilosRubro = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        width: 150,
        borderColor: 'grey',
        borderWidth: .7,
        // justifyContent: 'center',
        backgroundColor: '#FBF6E2',
        borderRadius:25,
        overflow : 'hidden',
        marginHorizontal: 3,
        marginVertical: 5,
       
    },
    tituloItem: {
        fontSize: 10,
        textAlign : 'center',
        textTransform: 'uppercase',
        fontWeight : 'bold',
        // fontFamily : 'Quinta',
        zIndex: 50,
        // marginHorizontal : 10,
        marginVertical: 10,
        // // textShadowColor: 'black',
        // textDecorationStyle: 'solid',
        // // textShadowOffset: { width: 2, height: 2 },
        // textShadowRadius: 5,
        width: '100%',
    },
    imagen: {
        width: '100%',
        height: '70%',
        // marginBottom : -50,
        position: 'absolute',
        bottom: 0
        // opacity: .60,
        // backgroundColor: 'transparent'
    }
})

export default Rubro;