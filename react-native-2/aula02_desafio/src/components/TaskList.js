import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ tasks }) => {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => <Text style={styles.taskItem}>{item.text}</Text>}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    taskItem: {
        padding: 20,
        fontSize: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
});

export default TaskList;
