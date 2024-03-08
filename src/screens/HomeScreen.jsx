import React from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

    const navigation = useNavigation();
    return (
    
        <View style={{flex : 1 , justifyContent: 'center' , alignItems : 'center'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('SettingScreen')}
            style = {{
                backgroundColor:'purple',
                padding : 10,
                marginTop : '20%',
                width : '50%',
                alignSelf : 'center',
                borderRadius : 10
            }}>
                <Text style = {{
                    fontSize : 15,
                    textAlign : 'center',
                    color : 'white'
                }}
            >Ir a Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen