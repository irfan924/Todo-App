import React from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { width } from './Diemensions'

import Icon from 'react-native-vector-icons/FontAwesome6';

const Inputs = ({onPress, onChangeText, value}) => {
    return (
        <View style={styles.mainView}>
            <TextInput
                placeholder='Enter Your Todo'
                placeholderTextColor={'#fff'}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Icon name='plus' size={width*0.1} color='white' />                

            </TouchableOpacity>
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        backgroundColor: '#61677A',
        borderRadius: width*0.01,
        width: width*0.8,
        fontSize: width*0.05,
        fontFamily: 'abz',
        color: '#fff'
    },
    btn: {
        backgroundColor: '#0C356A',
        width: width*0.12,
        height: width*0.12,
        borderRadius: width*0.06,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#FEFFAC',
        paddingVertical: width*0.02,
        textAlign: 'center',
        fontFamily: 'ubuntu',
        fontSize: width*0.1,

    }
})