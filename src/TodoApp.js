import React, { useEffect, useState } from 'react'
import {
    Alert,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import TodoView from './TodoView'
import { height, width } from './Diemensions'
import Inputs from './Inputs'

const TodoApp = () => {

    const [todo, setTodo] = useState([]);
    const [NewTodo, setNewTodo] = useState('');


    const clear = () => setNewTodo('')

    const handleTodo = async () => {
        if (!NewTodo) {
            Alert.alert('Please Write Something !')
        }
        else {

            const updatedTodo = [NewTodo, ...todo];
            setTodo(updatedTodo);
            AsyncStorage.setItem("todo", JSON.stringify(updatedTodo))
            clear();
        }

    }


    const getTodo = async () => {
        const todos = await AsyncStorage.getItem('todo');
        setTodo(JSON.parse(todos) ? JSON.parse(todos) : [])
    }

    const handleDeleteTodo = () => {

        AsyncStorage.removeItem('todo')

    }

    useEffect(() => {
        getTodo();
    }, [handleDeleteTodo])


    return (
        <View style={styles.mainView}>


            <StatusBar backgroundColor={'#FEFFAC'} barStyle={'dark-content'} />

            <View style={{ width: width * 1, height: height * 0.2 }}>
                <Text style={styles.headingText}>
                    TodoApp
                </Text>

                <Inputs
                    value={NewTodo}
                    onChangeText={(val) => setNewTodo(val)}
                    onPress={handleTodo}
                />
            </View>

            <View style={styles.contentView}>

                <Text style={styles.text}>

                    {todo.length} {todo.length < 1 ? ' Task ' : ' Tasks '}
                    Available for You.

                </Text>

                <FlatList

                    data={todo}
                    renderItem={({ item, index }) =>

                        <TodoView
                            todoText={item}
                            onPress={handleDeleteTodo}
                        />
                    }

                />

            </View>



        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    headingText: {
        textAlign: 'center',
        marginVertical: width * 0.04,
        fontSize: width * 0.1,
        color: '#61677A',
        fontFamily: 'yanoneM',
        letterSpacing: 5,
    },
    mainView: {
        backgroundColor: '#FEFFAC',
        width: width * 1,
        height: height * 1
    },
    contentView: {
        width: width * 1,
        height: height * 0.713,
        backgroundColor: '#61677A',
        borderTopLeftRadius: width * 0.1,
        borderTopRightRadius: width * 0.1,
    },
    text: {
        textAlign: 'center',
        marginBottom: width * 0.07,
        color: '#FEFFAC',
        fontFamily: 'robotoR'
    }
})