import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const addTaskHandler = () => {
        onAddTask(task);
        setTask(''); // Limpar o campo de texto após a adição
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Adicionar" onPress={addTaskHandler} color="#f7287b" />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 10,
        padding: 10,
    },
});

export default TaskInput;
