import React from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'
import { useRoute } from '@react-navigation/native';

const ListaDeProductosScreen = () => {

    const route = useRoute();
    const {rubroSeleccionado} = route.params;

    return (

        <View style={{flex : 1 , justifyContent: 'center' , alignItems : 'center'}}>
            <Text>{rubroSeleccionado}</Text>
        </View>
    )
}

export default ListaDeProductosScreen