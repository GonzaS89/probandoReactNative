import React, { useEffect } from 'react';
import { View , Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CarritoScreen = () => {

    const route = useRoute();

    const { data } = route.params;

    
    return (
        <View>
            <Text>{data}</Text>
        </View>
    )
}

export default CarritoScreen;