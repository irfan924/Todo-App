import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const TodoView = ({ onPress, todoText }) => {


    return (
        <View style={styles.view}>
            <View style={styles.Innerview}>

                <Text style={styles.text}>
                    {todoText}
                </Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={onPress}
                >

                    <Icon name='trash-alt' size={width * 0.06} color='#fff' />

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TodoView

const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    Innerview: {
        backgroundColor: '#fff',
        padding: width * 0.03,
        width: width * 0.95,
        borderRadius: width * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: width*0.01
    },
    text: {
        fontSize: width * 0.05,
        color: '#000',
        fontFamily: 'abz',
        maxWidth: width * 0.77,
        textAlign: 'justify'
    },
    btn: {
        backgroundColor: '#61677A',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    }

});