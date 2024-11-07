import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskInput from './src/components/TaskInput';
import TaskList from './src/components/TaskList';


export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTaskHandler = taskText => {
        setTasks(currentTasks => [...currentTasks, { id: Math.random().toString(), text: taskText }]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lista de Tarefas</Text>
            <TaskInput onAddTask={addTaskHandler} />
            <TaskList tasks={tasks} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
