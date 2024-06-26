import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Rubro = ( {nombreRubro , imagenRubro} ) => {

    const Navigation = useNavigation();

    return (

        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => Navigation.navigate('ListaDeProductos', {rubroSeleccionado : nombreRubro , titulo : nombreRubro})}
            style={estilosRubro.container}>
            <Text style={estilosRubro.tituloItem}>{nombreRubro}</Text>
            <Image
                style={estilosRubro.imagen}
                source={require('../src/imagenes/pollo.png')} />
        </TouchableOpacity>


    )
}

const estilosRubro = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width: 300,
        borderColor: 'grey',
        borderWidth: 2,
        // justifyContent: 'center',
        backgroundColor: '#F0F3FF',
        borderRadius:25,
        overflow : 'hidden',
        marginHorizontal: 2,
        marginVertical: 2
    },
    tituloItem: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontFamily: 'Primaria',
        zIndex: 50,
        marginHorizontal : 10,
        marginVertical: 10,
        color: 'black',
        // textShadowColor: 'black',
        textDecorationStyle: 'solid',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        width: '100%',
    },
    imagen: {
        width: '100%',
        height: 200,
        marginBottom : -50,
        position: 'absolute',
        bottom: 0,
        right: 0
        // opacity: .60,
        // backgroundColor: 'transparent'
    }
})

export default Rubro;