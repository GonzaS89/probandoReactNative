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
                source={{ uri: imagenRubro }} />
        </TouchableOpacity>


    )
}

const estilosRubro = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    tituloItem: {
        textAlign: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: 'Terciaria',
        zIndex: 50,
        color: 'white',
        textShadowColor: 'black',
        textDecorationStyle: 'solid',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        width: '100%'
    },
    imagen: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: .5,
        backgroundColor: 'transparent'
    }
})

export default Rubro;